const form = document.querySelector("#userForm") as HTMLFormElement;
const nameInput = document.querySelector("#nameInput") as HTMLInputElement;
const ageInput = document.querySelector("#ageInput") as HTMLInputElement;
const submitButton = document.querySelector(
  "#submitButton"
) as HTMLButtonElement;
const spinner = document.querySelector("#spinner") as HTMLDivElement;

interface TUser {
  name: string;
  age: number;
}

class User implements TUser {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log(`Hello, I am ${this.name}. My age is ${this.age}`);
    const child = document.createElement("p");
    child.textContent = `Hello, I am ${this.name}. My age is ${this.age}`;
    if (form) {
      form.appendChild(child);
    } else {
      console.error("Form element not found");
    }
  }
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitButton.classList.add("hidden");
    spinner.classList.remove("hidden");
    if (spinner) {
      const spin = () => {
        let rotation = 0;
        const spinnerAnimation = () => {
          rotation = (rotation + 1) % 360;
          spinner.style.transform = `rotate(${rotation}deg)`;
          requestAnimationFrame(spinnerAnimation);
        };
        requestAnimationFrame(spinnerAnimation);
      };
      spin();
    }
    const user = new User(nameInput.value, ageInput.valueAsNumber);

    setTimeout(() => {
      user.hello();
      spinner.classList.add("hidden");
    }, 2000);
  });
}
