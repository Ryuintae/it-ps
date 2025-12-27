function solution(numbers, direction) {
    if (direction === "right") {
        const last = numbers.slice(-1);
        const rest = numbers.slice(0, -1);
        return last.concat(rest);
    } else {
        const first = numbers.slice(0, 1);
        const rest = numbers.slice(1);
        return rest.concat(first);
    }
}