export default {
    props: {
        value: String
    },
    data: function () {
        return {
            showOptions: false,
            id: null,
            opt: this.options,
            resText: this.getText(this.value),
            resValue: this.value,
            resValueBefore: this.value,
            resPlaceholder: this.getText(this.value),
            typeAheadPointer: -1,
            positionClass: ''
        };
    },
    mounted() {
        this.id = this._uid;
    },
    watch: {
        value: function () {
            this.resText = this.getText(this.value);
            this.resPlaceholder = this.getText(this.value);
        },
        typeAheadPointer() {
            this.maybeAdjustScroll();
        }
    },
    methods: {
        maybeAdjustScroll() {
            let pixelsToPointerTop = this.pixelsToPointerTop();
            let pixelsToPointerBottom = this.pixelsToPointerBottom();

            if (pixelsToPointerTop <= this.viewport().top) {
                return this.scrollTo(pixelsToPointerTop);
            } else if (pixelsToPointerBottom >= this.viewport().bottom) {
                return this.scrollTo(this.viewport().top + this.pointerHeight());
            }
        },
        pixelsToPointerTop() {
            let pixelsToPointerTop = 0;
            if (this.$refs.dropdownMenu) {
                for (let i = 0; i < this.typeAheadPointer; i++) {
                    pixelsToPointerTop += this.$refs.dropdownMenu.children[i]
                        .offsetHeight;
                }
            }
            return pixelsToPointerTop;
        },
        pixelsToPointerBottom() {
            return this.pixelsToPointerTop() + this.pointerHeight();
        },
        pointerHeight() {
            let element = this.$refs.dropdownMenu
                ? this.$refs.dropdownMenu.children[this.typeAheadPointer]
                : false;
            return element ? element.offsetHeight : 0;
        },
        viewport() {
            return {
                top: this.$refs.dropdownMenu ? this.$refs.dropdownMenu.scrollTop : 0,
                bottom: this.$refs.dropdownMenu
                    ? this.$refs.dropdownMenu.offsetHeight +
                    this.$refs.dropdownMenu.scrollTop
                    : 0
            };
        },
        scrollTo(position) {
            return this.$refs.dropdownMenu
                ? (this.$refs.dropdownMenu.scrollTop = position)
                : null;
        },

        closeEvent(event) {
            this.showOptions = false;
            this.resText = this.resPlaceholder;
            this.endOfEdit();
        },
        getI: function (text) {
            if (this.opt) {
                for (var i = 0; i < this.opt.length; i++) {
                    if (this.opt[i].text == text) {
                        return i;
                    }
                }
            }
            return 0;
        },
        getValue: function (text) {
            for (var i = 0; i < this.opt.length; i++) {
                if (this.opt[i].text == text) {
                    return this.opt[i].value;
                }
            }
        },
        getText: function (value) {
            if (value == null) return "";
            for (var i = 0; i < this.opt.length; i++) {
                if (this.opt[i].value == value) {
                    return this.opt[i].text;
                }
            }
        },
        endOfEdit: function () {
            this.resValue = this.getValue(this.resText);
            this.resPlaceholder = this.resText;
            this.$emit("input", this.resValue);
            this.$emit("change-model", this.resValue);
            this.showOptions = false;
        },
        onInput: function (value) {
            if (!this.showOptions) {
                this.showOptions = true;
            }
            var val = this.resValueBefore;
            for (var i = 0; i < this.opt.length; i++) {
                let res = this.opt[i].text
                    .toUpperCase()
                    .indexOf(value.toUpperCase());
                if (res == 0) {
                    value = this.opt[i].text.substr(0, value.length);
                    this.resValueBefore = value;
                    val = value;
                    this.resPlaceholder = this.opt[i].text;
                    break;
                }
            }
            if (val == "") {
                this.resPlaceholder = this.placeholder;
            }
            this.$refs["input"].value = val;
            this.resText = val;
            this.typeAheadPointer = this.getI(this.resPlaceholder);
            this.scrollTo(this.pixelsToPointerTop(this.typeAheadPointer));
        },

        open() {
            if (!this.showOptions) {
                this.showOptions = true;
                this.$nextTick(() => {
                    this.typeAheadPointer = this.getI(this.resPlaceholder);
                    this.scrollTo(this.pixelsToPointerTop(this.typeAheadPointer));
                });
                this.addCloseEvents();
                this.setupPosition();
            }
        },

        close() {
            if (this.showOptions) {
                this.showOptions = false;
                this.removeCloseEvents();
                this.teardownPosition();
            }
        },

        closeViaOverlay(e) {
            if (e.target === this.$refs.outerWrap) {
                this.close();
            }
        },

        addCloseEvents() {
            if (!this.closeEventListener) {
                this.closeEventListener = e => this.inspectCloseEvent(e);

                ["click", "keyup", "focusin"].forEach(eventName =>
                    document.addEventListener(eventName, this.closeEventListener)
                );
            }
        },

        inspectCloseEvent(event) {
            if (event.keyCode) {
                event.keyCode === 27 && this.close();
            } else if (
                !(event.target === this.$el) &&
                !this.$el.contains(event.target)
            ) {
                this.close();
            }
        },

        removeCloseEvents() {
            if (this.closeEventListener) {
                ["click", "keyup"].forEach(eventName =>
                    document.removeEventListener(eventName, this.closeEventListener)
                );

                delete this.closeEventListener;
            }
        },

        setupPosition() {
            if (!this.positionEventListener) {
                this.positionEventListener = () => this.positionFloater();
                window.addEventListener("resize", this.positionEventListener);
            }

            this.positionFloater();
        },

        positionFloater() {
            const inputRect = this.$el.getBoundingClientRect();

            let verticalClass = "bs-position-top";

            const calculate = () => {
                const rect = this.$refs.dropdownMenu.getBoundingClientRect();
                const floaterHeight = rect.height;

                if (
                    inputRect.top + inputRect.height + floaterHeight >
                    window.innerHeight &&
                    inputRect.top - floaterHeight > 0
                ) {
                    verticalClass = "bs-position-bottom";
                }

                this.positionClass = [
                    verticalClass
                ].join(" ");

            };

            this.$refs.dropdownMenu ? calculate() : this.$nextTick(calculate);
        },

        teardownPosition() {
            if (this.positionEventListener) {
                this.positionClass = undefined;
                window.removeEventListener("resize", this.positionEventListener);
                delete this.positionEventListener;
            }
        },
        onFocusSelect: function () {
            this.showOptions = true;
            this.$nextTick(() => {
                this.typeAheadPointer = this.getI(this.resPlaceholder);
                this.scrollTo(this.pixelsToPointerTop(this.typeAheadPointer));
            });
        },
        onClickOption: function (option, key) {
            if (!option.disabled) {
                this.resText = option.text;
                this.endOfEdit();
            }
        },
        onKeyDown: function (event) {
            switch (event.keyCode) {
                case 9: // tab
                    this.resText = this.resText == "" ? "" : this.resPlaceholder;
                    this.endOfEdit();
                    return;
            }
        },
        onKeyUp: function (event) {
            switch (event.keyCode) {
                case 38: // up
                    event.preventDefault();
                    var i = this.getI(this.resPlaceholder);
                    if (this.showOptions) {
                        if (i > 0) {
                            i--;
                        }
                    } else {
                        this.showOptions = true;
                    }
                    this.resPlaceholder = this.opt[i].text;
                    this.resText = this.resPlaceholder;
                    this.typeAheadPointer = i;
                    if (this.maybeAdjustScroll) {
                        this.maybeAdjustScroll();
                    }
                    return;
                case 40: // down
                    event.preventDefault();
                    var i = this.getI(this.resPlaceholder);
                    if (this.showOptions) {
                        if (i < this.opt.length - 1) {
                            i++;
                        }
                    } else {
                        this.showOptions = true;
                    }
                    if (this.resPlaceholder == "") { i = 0; }
                    this.resPlaceholder = this.opt[i].text;
                    this.resText = this.resPlaceholder;
                    this.typeAheadPointer = i;
                    if (this.maybeAdjustScroll) {
                        this.maybeAdjustScroll();
                    }
                    return;
                case 13: //enter
                    //event.preventDefault();
                    this.resText = this.resText == "" ? "" : this.resPlaceholder;
                    this.endOfEdit();
                    break;
            }
        }
    }
};