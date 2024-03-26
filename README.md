Web application designed to manage bus bookings. This application offers users a platform to reserve bus seats conveniently. Users can input their personal details such as name, email, and phone number, along with selecting their preferred bus type from a list.

Once users submit their booking information through the provided form, the application dynamically adds their details to a list displayed on the webpage. Each entry in the list comprehensively includes the user's name, email, phone number, and the type of bus they have booked.

The application supports fundamental CRUD (Create, Read, Update, Delete) operations for managing bookings. Users have the ability to add new bookings, view existing bookings, edit booking details, and delete bookings if necessary. These operations are seamlessly integrated into the user interface, offering a smooth and intuitive experience.

To store and retrieve booking data, the application interacts with a remote API hosted on https://crudcrud.com. Axios, a JavaScript library, facilitates the communication with the API endpoints, enabling the application to perform CRUD operations effectively.

The application provides filtering functionality, allowing users to refine their view of bookings based on the type of bus selected. By choosing a specific bus type from a dropdown menu, users can dynamically filter the displayed bookings, making it easier to find relevant information.
