function getElementWidth (contentWidthStr, paddingWidthStr, borderWidthStr) {
    const contentWidth = parseFloat(contentWidthStr);
    const paddingWidth = parseFloat(paddingWidthStr);
    const borderWidth = parseFloat(borderWidthStr);
    return contentWidth + 2 * paddingWidth + 2 * borderWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));