// Item Section
let itemSection = [
    document.getElementById("itemSectionOne"),
    document.getElementById("itemSectionTwo"),
    document.getElementById("itemSectionThree"),
    document.getElementById("itemSectionFour"),
    document.getElementById("itemSectionFive"),
]

// Customize Theme Div
let customizeThemeDiv = [
    document.getElementById("customizeThemeDivOne"),
    document.getElementById("customizeThemeDivTwo"),
    document.getElementById("customizeThemeDivThree"),
    document.getElementById("customizeThemeDivFour"),
    document.getElementById("customizeThemeDivFive"),
]

// Item Section Images
let itemSectionImage = [
    document.getElementById("itemSectionImageOne"),
    document.getElementById("itemSectionImageTwo"),
    document.getElementById("itemSectionImageThree"),
    document.getElementById("itemSectionImageFour"),
    document.getElementById("itemSectionImageFive"),
]

// Customize Icons
let customizeIcon = [
    document.getElementById("customizeIconOne"),
    document.getElementById("customizeIconTwo"),
    document.getElementById("customizeIconThree"),
    document.getElementById("customizeIconFour"),
    document.getElementById("customizeIconFive"),
]

// Title Text
let titleText = [
    document.getElementById("titleTextOne"),
    document.getElementById("titleTextTwo"),
    document.getElementById("titleTextThree"),
    document.getElementById("titleTextFour"),
    document.getElementById("titleTextFive"),
]


// to togle the section
// the -1 means item not open
let openIndex = -1;

const toggleElement = (currentIndex) => {
    if (openIndex === currentIndex) {
        return;
    }
    if (openIndex !== -1) {
        customizeThemeDiv[openIndex].classList.remove("customize-theme-div")
        customizeThemeDiv[openIndex].classList.add("hide-customize-theme-div")
        itemSection[openIndex].classList.remove("item-section")
        itemSection[openIndex].classList.add("toggle-item-section")
        titleText[openIndex].classList.remove("item-title-div-p")
        titleText[openIndex].classList.add("toggle-item-title-div-p")
        itemSectionImage[openIndex].classList.remove("item-section-image")
        itemSectionImage[openIndex].classList.add("toggle-item-section-image")
    }

    // this part checks if the item being clicked is different from wht is opened, to avoid the usual toggle thats why I didnt use (openIndex == -1)
    if (openIndex !== currentIndex) {
        customizeThemeDiv[currentIndex].classList.remove("hide-customize-theme-div")
        customizeThemeDiv[currentIndex].classList.add("customize-theme-div")
        itemSection[currentIndex].classList.remove("toggle-item-section")
        itemSection[currentIndex].classList.add("item-section")
        titleText[currentIndex].classList.remove("toggle-item-title-div-p")
        titleText[currentIndex].classList.add("item-title-div-p")
        itemSectionImage[currentIndex].classList.remove("toggle-item-section-image")
        itemSectionImage[currentIndex].classList.add("item-section-image")
        openIndex = currentIndex;  // this sets the current state to openIndex
    } else {
        // this else block close any open item
        openIndex = -1
    }
};

toggleElement(0)

for (let i = 0; i < itemSection.length; i++) {
    titleText[i].addEventListener("click", () => {
        toggleElement(i);
    });

    customizeIcon[i].addEventListener("click", () => {
        toggleElement(i);
    });
}

// controls the opening of the first div dynamically
let customizeThemeDivOne = document.getElementById("customizeThemeDivOne")
let itemSectionOne = document.getElementById("itemSectionOne")
let itemSectionImageOne = document.getElementById("itemSectionImageOne")
let customizeIconOne = document.getElementById("customizeIconOne")
let titleTextOne = document.getElementById("titleTextOne")
let itemsWrapper = document.getElementById("itemsWrapper")

let dropDownIcon = document.getElementById("dropDownIcon")

const toggleIemsWrapperDiv = () => {
    if (itemsWrapper.classList.contains("items-wrapper")) {
        itemsWrapper.classList.remove("items-wrapper")
        itemsWrapper.classList.add("toggle-items-wrapper")
        dropDownIcon.style.transform = "rotate(0deg)"
        dropDownIcon.style.border = "2px solid transparent"
    } else if (itemsWrapper.classList.contains("toggle-items-wrapper")) {
        itemsWrapper.classList.remove("toggle-items-wrapper")
        itemsWrapper.classList.add("items-wrapper")
        dropDownIcon.style.transform = "rotate(180deg)"
        dropDownIcon.style.border = "2px solid #005BD3"
    }
}

dropDownIcon.addEventListener("click", toggleIemsWrapperDiv)

// toggleitemWrapperDiv using ArrowUp key
const keyboardToggleItemsWrapperDiv = (event) => {
    if (event.key === "ArrowUp") {
        if (itemsWrapper.classList.contains("items-wrapper")) {
            // If the dropdown is closed, open it
            itemsWrapper.classList.remove("items-wrapper")
            itemsWrapper.classList.add("toggle-items-wrapper")
            dropDownIcon.style.transform = "rotate(0deg)"
            dropDownIcon.style.border = "2px solid transparent"
        } else {
            // If the dropdown is open, close it
            itemsWrapper.classList.remove("toggle-items-wrapper")
            itemsWrapper.classList.add("items-wrapper")
            dropDownIcon.style.transform = "rotate(180deg)"
            dropDownIcon.style.border = "2px solid #005BD3"
        }
    }
}
dropDownIcon.addEventListener("keyup", keyboardToggleItemsWrapperDiv)

window.onload = function () {
    dropDownIcon.focus()
}


// for the plan advert
let bodyHeader = document.getElementById("bodyHeader")
let desktopCloseIcon = document.getElementById("desktopCloseIcon")
let mobileCloseIcon = document.getElementById("mobileCloseIcon")

const planAd = () => {
    if (bodyHeader.classList.contains("body-header")) {
        bodyHeader.classList.remove("body-header")
        bodyHeader.classList.add("hide-body-header")
    }
}

desktopCloseIcon.addEventListener("click", planAd)
mobileCloseIcon.addEventListener("click", planAd)


let storenamePopup = document.getElementById("storenamePopup")
let storenameDiv = document.getElementById("storenameDiv")
let notificationIcon = document.getElementById("notificationIcon")
let alertDiv = document.getElementById("alertDiv")
let liButton = document.querySelectorAll(".li-button")

const toggleStorePopup = () => {
    if (storenamePopup.classList.contains("toggle-storename-popup")) {
        storenamePopup.classList.remove("toggle-storename-popup")
        storenamePopup.classList.add("storename-popup")
        storenameDiv.ariaExpanded = true
        liButton[0].focus()
    } else if (storenamePopup.classList.contains("storename-popup")) {
        storenamePopup.classList.remove("storename-popup")
        storenamePopup.classList.add("toggle-storename-popup")
        storenameDiv.ariaExpanded = false
    }
}
storenameDiv.addEventListener("click", toggleStorePopup)

storenamePopup.tabIndex = 0
const handleStoreEscapeKeypress = (event) => {
    if (event.key === "Escape") {
        storenamePopup.classList.remove("storename-popup")
        storenamePopup.classList.add("toggle-storename-popup")
        storenameDiv.ariaExpanded = false
        storenameDiv.focus()
    }
};
storenamePopup.addEventListener("keyup", handleStoreEscapeKeypress)

// 


// handling keyboard keys
const storepopupUl = document.getElementById("storepopupUl")
const liButtons = document.querySelectorAll(".li-button")

let currentIndex = -1

const handleKeydown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault()

        if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : liButtons.length - 1
        } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            currentIndex = currentIndex < liButtons.length - 1 ? currentIndex + 1 : 0
        }

        liButtons[currentIndex].focus()
    }
}

const handleFocus = (index) => {
    currentIndex = index;
}
storepopupUl.addEventListener("keydown", handleKeydown);

liButtons.forEach((button, index) => {
    button.addEventListener("focus", () => handleFocus(index))
})


const toggleAlertPopup = () => {
    if (alertDiv.classList.contains("toggle-alert-div")) {
        alertDiv.classList.remove("toggle-alert-div")
        alertDiv.classList.add("alert-div")
    } else if (alertDiv.classList.contains("alert-div")) {
        alertDiv.classList.remove("alert-div")
        alertDiv.classList.add("toggle-alert-div")
    }
}

notificationIcon.addEventListener("click", toggleAlertPopup)


let customizeSVG = document.querySelectorAll(".customize-svg")
let customizeDiv = document.querySelectorAll(".customize-icon")
let animatedCircle = document.querySelectorAll(".animated-circle")
let animatedTick = document.querySelectorAll(".animated-tick")
let checkboxUpdate = document.querySelectorAll(".check-box-update")


const clickIcon = (index) => {
    checkboxUpdate[index].setAttribute("aria-label", "Loading. Please wait...")
    customizeDiv[index].classList.remove("customize-icon")
    customizeDiv[index].classList.add("clicked-customize-icon")
    animatedCircle[index].classList.add("clicked-animated-circle")

    setTimeout(() => {
        animatedCircle[index].classList.remove("clicked-animated-circle")
        customizeSVG[index].classList.add("clicked-customize-svg")
        animatedCircle[index].style.stroke = "#303030"
        animatedTick[index].style.opacity = "1"
    }, 800)
    setTimeout(() => {
        checkboxUpdate[index].setAttribute("aria-label", "Successfully marked as done")
    }, 1000)
    const nextIndex = (index + 1) % itemSection.length;
    toggleElement(nextIndex)
    updateProgressBar(true, 1, 14)
};

const unClickIcon = (index) => {
    checkboxUpdate[index].setAttribute("aria-label", "Loading. Please wait...");
    animatedTick[index].style.opacity = "0";
    animatedCircle[index].style.stroke = "#8A8A8A";
    customizeSVG[index].classList.remove("clicked-customize-svg");
    animatedCircle[index].classList.add("clicked-animated-circle");

    setTimeout(() => {
        animatedCircle[index].classList.remove("clicked-animated-circle");
        customizeDiv[index].classList.remove("clicked-customize-icon");
        customizeDiv[index].classList.add("customize-icon");
    }, 800);

    setTimeout(() => {
        checkboxUpdate[index].setAttribute("aria-label", "Successfully marked as not done");
    }, 1000);

    updateProgressBar(false, 1, 14);
};

// i want it to click the customizediv(icon) and go to the next item
// but when i unclick it shud open the customizeThemeDiv which was handled inside the toggleThemeDiv

for (let i = 0; i < itemSection.length; i++) {
    customizeDiv[i].addEventListener("click", (event) => {
        const index = Array.from(customizeDiv).indexOf(event.currentTarget);
        if (customizeDiv[index].classList.contains("customize-icon")) {
            clickIcon(index);
        } else {
            unClickIcon(index);
        }
    });
}

let isClicked = false;
let progressBarDiv = document.getElementById("progressBarDiv")
let number = document.getElementById("number")
let count = 0
let numberCount = 0

const updateProgressBar = (isClicked, numberIncrease, step) => {
    if (isClicked) {
        count += step
        numberCount += numberIncrease
    } else if (!isClicked) {
        count -= step;
        numberCount -= numberIncrease
        if (count < 0 && numberCount < 0) {
            count = 0;
            numberCount = 0
        }
    }
    progressBarDiv.style.width = count + "px"
    number.textContent = `${numberCount} / 5 Completed`
}