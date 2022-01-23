

// shortenAddress function to display wallet address on UI button and eth card
export const shortenAddress = (address) => {
    var firstFive = address.substring(0,5);
    var lastFive = address.substring(address.length-4);
    return firstFive + "..." + lastFive;

}
