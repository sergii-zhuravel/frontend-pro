const initialValueInputEl = document.getElementById("initialValue");
const countersContainerEl = document.getElementById("countersContainer");

function createCounter() {
  let counter = +initialValueInputEl.value;
  return function (event) {
    counter = counter + 1;
    event.target.closest('div').firstElementChild.textContent = `Counter value: ${counter}`;
  };
}

function createCounterBtnClickHandler() {
  countersContainerEl.append(createCounterBlock());
  initialValueInputEl.value = "";
}

function createCounterBlock() {
  const newCounterContainerEl = document.createElement("div");
  newCounterContainerEl.className = "input-group flex-nowrap mt-3";
  const outputEl = document.createElement("span");
  outputEl.textContent = `Counter value: ${initialValueInputEl.value}`;
  const counterBtnEl = document.createElement("button");
  counterBtnEl.textContent = "Next Value";
  counterBtnEl.className = "btn btn-sm btn-success";
  newCounterContainerEl.append(outputEl);
  newCounterContainerEl.append(counterBtnEl);
  const counter = createCounter(outputEl);
  counterBtnEl.onclick = counter;

  return newCounterContainerEl;
}
