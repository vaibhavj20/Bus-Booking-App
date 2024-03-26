document.addEventListener("DOMContentLoaded", function () {
    const BookList = document.querySelector(".Booked-list");

    const addDetailsToList = (name, email, phone, bus, id) => {
        const li = document.createElement("li");
        li.dataset.id = id;
        li.innerHTML = `
         <span>  ${name} - ${email} - ${phone} -  ${bus} </span>
         <button class="edit-btn">Edit</button>
         <button class="delete-btn">Delete</button>
        `;
        BookList.appendChild(li);
    };

    const deleteDetail = (li) => {
        const id = li.dataset.id;
        li.remove();

        axios
            .delete(
                `https://crudcrud.com/api/656f38139e12421ab28b7fe4ce4d200b/userDetails/${id}`
            )
            .then((response) => console.log(response))
            .catch((error) => console.error(error));
    };

    const editDetail = (li) => {
        const newName = prompt("Enter new name:");
        const newEmail = prompt("Enter new email:");
        const newPhone = prompt("Enter new phone number:");
        const newBus = prompt("Enter new bus:");

        if (newName && newEmail && newPhone && newBus) {
            const id = li.dataset.id;
            axios
                .put(
                    `https://crudcrud.com/api/656f38139e12421ab28b7fe4ce4d200b/userDetails/${id}`,
                    {
                        name: newName,
                        email: newEmail,
                        phone: newPhone,
                        bus: newBus,
                    }
                )
                .then((response) => {
                    li.innerHTML = `
                    <span>   ${name} - ${email} - ${phone} - ${bus} </span>
                     <button class="edit-btn">Edit</button>
                     <button class="delete-btn">Delete</button>
                        
                    `;
                })
                .catch((error) => console.error(error));
        } else {
            alert("Please fill in all fields.");
        }
    };

    document
        .getElementById("book-bus")
        .addEventListener("click", function () {
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const bus = document.getElementById("select-bus").value;

            if (username && email && phone && bus) {
                axios
                    .post(
                        "https://crudcrud.com/api/656f38139e12421ab28b7fe4ce4d200b/userDetails",
                        {
                            name: username,
                            email: email,
                            phone: phone,
                            bus: bus,
                        }
                    )
                    .then((response) => {
                        addDetailsToList(
                            username,
                            email,
                            phone,
                            bus,
                            response.data._id
                        );
                        document.getElementById("username").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("phone").value = "";
                        document.getElementById("select-bus").selectedIndex = 0;
                    })
                    .catch((error) => console.error(error));
            } else {
                alert("Please fill in all fields.");
            }
        });

    const fetchDetailsFromApi = () => {
        axios
            .get(
                "https://crudcrud.com/api/656f38139e12421ab28b7fe4ce4d200b/userDetails"
            )
            .then((response) => {
                response.data.forEach((info) => {
                    const { name, email, phone, bus, _id } = info;
                    addDetailsToList(name, email, phone, bus, _id);
                });
            })
            .catch((error) => console.error(error));
    };

    fetchDetailsFromApi();

    BookList.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("delete-btn")) {
            deleteDetail(target.parentNode);
        } else if (target.classList.contains("edit-btn")) {
            editDetail(target.parentNode);
        }
    });

   

document.getElementById("filterBus").addEventListener("change", filterByBus);

function filterByBus() {
    const selectedBus = document.getElementById('filterBus').value;
    const userList = document.querySelector('.Booked-list').querySelectorAll('li');

    userList.forEach(userItem => {
        const userDetailsText = userItem.querySelector('span').innerText;
        const userDetailsArray = userDetailsText.split(' - ');
        const busType = userDetailsArray[3].trim();

        if (selectedBus === 'all' || busType === selectedBus) {
            userItem.style.display = 'block';
        } else {
            userItem.style.display = 'none';
        }
    });
}



});