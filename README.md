# Test Repository Usage and Task Instructions

## A. **How to Use the Repository**
1. **Fork the Repository**  
   - Fork the test repository to your GitHub account.

2. **Install Dependencies**  
   - Run the following command in your local environment to install the required packages:
     ```bash
     npm install
     ```

3. **Run the Application**  
   - Start the application using the following command:
     ```bash
     npm run dev
     ```

---

## B. **Code Formatting Setup**
- **Prettier** is pre-configured in the project to ensure consistent code formatting.  
- Set up your editor to follow the project's formatting rules:  
  - For **VSCode**, add the following settings in `.vscode/settings.json`:
    ```json
    {
      "editor.formatOnSave": true,
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      }
    }
    ```
  - For **other editors**, ensure that the `format on save` feature is enabled and configured to use Prettier.

---

## C. **Preparation Before Starting**
1. **Figma Link**  
   - Access the provided **Figma link** to review the UI designs. (The link will be shared with you during the test.)

2. **Request Access**  
   - If you are unable to access the Figma file, request permission.

3. **Refer to Figma**  
   - Follow the designs provided in Figma when implementing the pages.

---

## D. **Tasks to Complete**

### 1. **/casting Page Implementation**
- Build the **/casting** page based on the Figma design.
- **No REST API integration is required**; focus solely on creating the user interface.

---

### 2. **/contact Page Implementation**
- Build the **/contact** page with the necessary REST API integration to handle contact submissions.  
- **REST API Details**:
  - Use the phone verification code **1234** for all requests.
  - Send the verification request to the backend endpoint `/api/casting`.
  - The request payload should follow this structure:
    ```json
    { "code": [entered verification code] }
    ```
  - The server will return the following responses:
    - **Success**: HTTP status `200` with the following JSON:
      ```json
      {
        "message": "Verification successful"
      }
      ```
    - **Failure**: HTTP status `400` with the following JSON:
      ```json
      {
        "message": "Invalid verification code." // or "Request body is invalid. 'code' is required."
      }
      ```

---

## E. **Submission Guidelines**
1. **Git Workflow**  
   - Work in a new branch created from your forked repository.  
   - Branch naming convention: `feature/[your-name]`.

2. **Pull Request**  
   - Once your tasks are completed, push your branch and create a Pull Request (PR) to your forked repository.  
   - In the PR description, include:
     - A summary of the work you’ve done.
     - Any issues faced and how they were resolved.
     - Suggestions for improvement, if any.

---

**Note:** Make sure to adhere to Prettier formatting and follow the Figma designs closely. Focus on clean, maintainable code and properly handle API responses for the `/contact` page.
