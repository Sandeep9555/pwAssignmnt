function colorMixer(color1, color2) {
    switch (color1.toLowerCase()) {
        case "red":
            switch (color2.toLowerCase()) {
                case "blue":
                    console.log("Result: purple");
                    break;
                case "yellow":
                    console.log("Result: orange");
                    break;
                default:
                    console.log("Invalid color combination");
            }
            break;
        case "blue":
            if (color2.toLowerCase() === "yellow") {
                console.log("Result: green");
            } else {
                console.log("Invalid color combination");
            }
            break;
        default:
            console.log("Invalid color combination");
    }
}

// Example usage:
colorMixer("Red", "blue");
