export const findHorizontalMargin = (windowWith, tabItemWidth, numberOfTabs) => {
    const spaceLeft = windowWith - (tabItemWidth * numberOfTabs);
    return (spaceLeft / 6) - 10;

}