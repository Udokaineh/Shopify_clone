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
// the -1 sets item to not open
let openIndex = -1;

const toggleElement = (currentIndex) => {
    if (openIndex !== -1) {
        customizeThemeDiv[openIndex].classList.remove("customize-theme-div")
        customizeThemeDiv[openIndex].classList.add("hide-customize-theme-div")
        itemSection[openIndex].classList.remove("item-section")
        itemSection[openIndex].classList.add("toggle-item-section")
        titleText[openIndex].classList.remove("item-title-div-p")
        titleText[openIndex].classList.add("toggle-item-title-div-p")
        itemSectionImage[openIndex].classList.remove("item-section-image")
        itemSectionImage[openIndex].classList.add("toggle-item-section-image")
        // unClickIcon(currentIndex)
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
        unClickIcon(currentIndex)
    } else {
        // this else block close any open item
        openIndex = -1
    }
};

for (let i = 0; i < itemSection.length; i++) {
    titleText[i].addEventListener("click", () => {
        toggleElement(i);
    });

    // commented this line of code out becos I do not want to use the icon in opening up the items div.
    // customizeIcon[i].addEventListener("click", () => {
    //     toggleElement(i);
    // });
}

// controls the opening of the first div dynamically
let customizeThemeDivOne = document.getElementById("customizeThemeDivOne")
let itemSectionOne = document.getElementById("itemSectionOne")
let itemSectionImageOne = document.getElementById("itemSectionImageOne")
let customizeIconOne = document.getElementById("customizeIconOne")
let titleTextOne = document.getElementById("titleTextOne")
let dropDownIcon = document.getElementById("dropDownIcon")
let itemsWrapper = document.getElementById("itemsWrapper")


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
        openFirstSection()
    }
}

dropDownIcon.addEventListener("click", toggleIemsWrapperDiv)

const openFirstSection = () => {
    customizeThemeDivOne.classList.remove("hide-customize-theme-div")
    customizeThemeDivOne.classList.add("customize-theme-div")
    itemSectionOne.classList.remove("toggle-item-section")
    itemSectionOne.classList.add("item-section")
    titleTextOne.classList.remove("toggle-item-title-div-p")
    titleTextOne.classList.add("item-title-div-p")
    itemSectionImageOne.classList.remove("toggle-item-section-image")
    itemSectionImageOne.classList.add("item-section-image")
    openIndex = 0;
}

window.addEventListener("load", () => {
    openFirstSection()
})

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

// To update the icon disturbing the flow of the store popup and alert div
let storenamePopup = document.getElementById("storenamePopup")
let storenameDiv = document.getElementById("storenameDiv")
let notificationIcon = document.getElementById("notificationIcon")
let alertDiv = document.getElementById("alertDiv")

const updateDropDownIconDisplay = () => {
    if (
        storenamePopup.classList.contains("storename-popup") ||
        alertDiv.classList.contains("alert-div")
    ) {
        dropDownIcon.style.display = "none"
    } else {
        dropDownIcon.style.display = "block"
    }
};

const toggleStorePopup = () => {
    if (storenamePopup.classList.contains("toggle-storename-popup")) {
        storenamePopup.classList.remove("toggle-storename-popup")
        storenamePopup.classList.add("storename-popup")
        storenameDiv.classList.add("storename-div-focus")
    } else if (storenamePopup.classList.contains("storename-popup")) {
        storenamePopup.classList.remove("storename-popup")
        storenamePopup.classList.add("toggle-storename-popup")
        storenameDiv.classList.remove("storename-div-focus")
    }
    updateDropDownIconDisplay()
}
storenameDiv.addEventListener("click", toggleStorePopup)

const toggleAlertPopup = () => {
    if (alertDiv.classList.contains("toggle-alert-div")) {
        alertDiv.classList.remove("toggle-alert-div")
        alertDiv.classList.add("alert-div")
        notificationIcon.classList.add("notification-icon-focus")
    } else if (alertDiv.classList.contains("alert-div")) {
        alertDiv.classList.remove("alert-div")
        alertDiv.classList.add("toggle-alert-div")
        notificationIcon.classList.remove("notification-icon-focus")
    }
    updateDropDownIconDisplay()
}

notificationIcon.addEventListener("click", toggleAlertPopup)


let customizeSVG = document.querySelectorAll(".customize-svg")
let customizeDiv = document.querySelectorAll(".customize-icon")
let animatedCircle = document.querySelectorAll(".animated-circle")
let animatedTick = document.querySelectorAll(".animated-tick")

const clickIcon = (index) => {
    customizeDiv[index].classList.remove("customize-icon")
    customizeDiv[index].classList.add("clicked-customize-icon")
    animatedCircle[index].classList.add("clicked-animated-circle")

    setTimeout(() => {
        animatedCircle[index].classList.remove("clicked-animated-circle")
        customizeSVG[index].classList.add("clicked-customize-svg")
        animatedCircle[index].style.stroke = "#303030"
        animatedTick[index].style.opacity = "1"
    }, 800)
    isClicked = true
    updateProgressBar(isClicked, 1, isThemeDivOpen(index), 14)
};

const unClickIcon = (index) => {
    customizeDiv[index].classList.add("customize-icon")
    customizeDiv[index].classList.remove("clicked-customize-icon")
    setTimeout(() => {
        animatedTick[index].style.opacity = "0"
        customizeSVG[index].classList.remove("clicked-customize-svg")
        animatedCircle[index].style.stroke = "#8A8A8A"
    }, 200)
    isClicked = false; // Update isClicked to false
    updateProgressBar(isClicked, 1, isThemeDivOpen(index), 14)
}
const isThemeDivOpen = (index) => {
    return customizeThemeDiv[index].classList.contains("customize-theme-div")
};

// i made the icon only ticks if the user clicks on it and unclicks if the themediv is opened
for (let i = 0; i < itemSection.length; i++) {
    customizeDiv[i].addEventListener("click", (event) => {
        if (event.target.closest(".customize-icon")) {
            const isThemeDivOpen = customizeThemeDiv[i].classList.contains("customize-theme-div")
            if (isThemeDivOpen) {
                unClickIcon(i)
            } else {
                clickIcon(i)
            }
        } else {
            unClickIcon(i)
        }
    })
}

let isClicked = false;
let progressBarDiv = document.getElementById("progressBarDiv")
let number = document.getElementById("number")
let count = 0
let numberCount = 0

const updateProgressBar = (isClicked, numberIncrease, isThemeDivOpen, step) => {
    if (isClicked && !isThemeDivOpen) {
        count += step
        numberCount += numberIncrease
    } else if (!isClicked && !isThemeDivOpen) {
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