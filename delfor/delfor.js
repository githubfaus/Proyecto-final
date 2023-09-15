window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const task = input.value;
  
      const task_el = document.createElement("div");
      task_el.classList.add("task");
  
      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");
  
      task_el.appendChild(task_content_el);
  
      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("readonly", "readonly");
  
      task_content_el.appendChild(task_input_el);
  
      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");
  
      const task_editar_el = document.createElement("button");
      task_editar_el.classList.add("editar");
      task_editar_el.innerText = "Editar";
  
      const task_borrar_completado_el = document.createElement("button");
      task_borrar_completado_el.classList.add("borrar");
      task_borrar_completado_el.innerText = "Completado";
  
      task_actions_el.appendChild(task_editar_el);
      task_actions_el.appendChild(task_borrar_completado_el);
  
      task_el.appendChild(task_actions_el);
  
      list_el.appendChild(task_el);
  
      input.value = "";
  
      task_editar_el.addEventListener("click", (e) => {
        if (task_input_el.hasAttribute("readonly")) {
          task_input_el.removeAttribute("readonly");
          task_input_el.focus();
          task_editar_el.innerText = "Guardar";
        } else {
          task_input_el.setAttribute("readonly", "readonly");
          task_editar_el.innerText = "Editar";
        }
      });
  
      task_borrar_completado_el.addEventListener("click", (e) => {
        if (task_borrar_completado_el.innerText.toLowerCase() === "completado") {
          // Tachamos el contenido en pantalla
          task_input_el.style.textDecoration = "line-through";
          // Cambiamos el botón a "Borrar"
          task_borrar_completado_el.innerText = "Borrar";
          // Ocultamos el botón de "Editar"
          task_editar_el.style.display = "none";
        } else {
          // Si el botón es "Borrar", eliminamos la tarea
          list_el.removeChild(task_el);
        }
      });
    });
  });
  
  // DISPLAY CALENDARIO
  
  const calendarBody = document.getElementById("calendar-body");
  const currentMonthYearElement = document.getElementById("current-month-year");
  
  function generateCalendar() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const currentMonthName = months[currentMonth];
  
    // Display the month and year in the h5 element
    currentMonthYearElement.textContent = `${currentMonthName} (${currentYear})`;
  
    // Clear the previous calendar content
    calendarBody.innerHTML = "";
  
    // Generate the calendar
    let date = 1;
    for (let row = 0; row < 6; row++) {
      const newRow = document.createElement("tr");
      for (let col = 0; col < 7; col++) {
        const newCell = document.createElement("td");
        if (row === 0 && col < firstDayOfMonth) {
          newCell.textContent = "";
        } else if (date > daysInMonth) {
          break;
        } else {
          newCell.textContent = date;
          if (
            date === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
          ) {
            newCell.classList.add("hoy");
          }
          date++;
        }
        newRow.appendChild(newCell);
      }
      calendarBody.appendChild(newRow);
    }
  }
  
  // Initial call to the function to generate the calendar
  generateCalendar();
  
  // Consejos
  
  const consejos = {
    1: "¡Ahora podés dejar tus sugerencias en la sección de contacto!",
    2: "¡No te olvides de chequear las demás páginas en la barra de navegación!",
    3: "Recordá que no podés editar las tareas una vez completadas.",
    4: "Proximamente podrás guardar tus tareas cuando recargues la página.",
  };
  
  function consejoAleatorio() {
    const consejosKeys = Object.keys(consejos);
    const numeroConsejo =
      consejosKeys[Math.floor(Math.random() * consejosKeys.length)];
    const consejo = consejos[numeroConsejo];
  
    document.querySelector("#consejo-numero").textContent = numeroConsejo;
    document.querySelector("#consejo-texto").textContent = consejo;
  }
  
  consejoAleatorio();