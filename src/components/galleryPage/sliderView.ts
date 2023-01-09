export function controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, minDiv: HTMLDivElement) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    if (from > to) {
        fromSlider.value = `${to}`;
        minDiv.textContent = `${to}`;
    } else {
        minDiv.textContent = `${from}`;
    }
}

export function controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, maxDiv: HTMLDivElement) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
        toSlider.value = `${to}`;
        maxDiv.textContent = `${to}`;
    } else {
        maxDiv.textContent = `${from}`;
        toSlider.value = `${from}`;
    }
}

export function setToggleAccessible(currentTarget: HTMLInputElement) {
    if (Number(currentTarget.value) <= 0) {
        currentTarget.style.zIndex = '2';
    } else {
        currentTarget.style.zIndex = '0';
    }
}

function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
    return [Number(currentFrom.value), Number(currentTo.value)];
}

export function fillSlider(
    from: HTMLInputElement,
    to: HTMLInputElement,
    sliderColor: string,
    rangeColor: string,
    controlSlider: HTMLInputElement
) {
    const rangeDistance = Number(to.max) - Number(to.min);
    const fromPosition = Number(from.value) - Number(to.min);
    const toPosition = Number(to.value) - Number(to.min);
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
}
