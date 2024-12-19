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
   - Access the provided **Figma link** to review the UI designs. (The link will be shared with you upon request.) 
   - https://www.figma.com/design/MrG620iW8A7lDRP04xUnWH/weltenters-test?node-id=2-2&m=dev&t=E7nQdgf9eBJCaC4X-1
     
2. **Request Access**  
   - If you are unable to access the Figma file, request permission as soon as possible.

3. **Time Tracking**  
   - Once you receive access to the Figma file, **start tracking your time**.  
     - Record when you start and finish the task.  
     - Accurately report the time taken to complete each task.

4. **Refer to Figma**  
   - Follow the designs provided in Figma when implementing the pages.

5. **Design and UX/UI Improvements**  
   - If you identify any areas for improvement or enhancement in the provided design and UX/UI, you are allowed to make changes.  
   - For any modifications made, **provide a clear explanation** of:  
     - What was improved.  
     - Why the change was necessary.  
     - How it benefits the user experience.

---

## D. **Tasks to Complete**

### 1. **/casting Page Implementation**
- Build the **/casting** page based on the Figma design.
- **No REST API integration is required**; focus solely on creating the user interface.

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
        "status": "success",
        "message": "Verification successful."
      }
      ```
    - **Failure**: HTTP status `400` with the following JSON:
      ```json
      {
        "status": "fail",
        "message": "Invalid verification code."
      }
      ```

---
## E. Style Guidelines
- All styles must be written in SCSS and located under the /src/styles/ directory.
- Follow the SCSS conventions and ensure all styles are modular and reusable.
- Use variables, mixins, and functions wherever applicable to improve code maintainability and readability.
- Import the SCSS files into your components or pages as needed.

## F. **Time Tracking and Submission Guidelines**
1. **Time Tracking**  
   - Accurately record the time taken to complete each task:
     - `/casting` Page: Start Time → End Time  
     - `/contact` Page: Start Time → End Time  

2. **Design or UX/UI Improvements**  
   - If you made changes or enhancements to the provided design, explain the following in your PR:
     - What improvements were made.  
     - The reasoning behind the changes.  
     - How the changes enhance usability or functionality.

3. **Git Workflow**  
   - Work in a new branch created from your forked repository.  
   - Branch naming convention: `feature/[your-name]`.

4. **Pull Request**  
   - Once your tasks are completed, push your branch and create a Pull Request (PR) to your forked repository.  
   - In the PR description, include:
     - A summary of the work you’ve done.
     - Time taken for each task.
     - Design/UX/UI improvements (if applicable).
     - Any issues faced and how they were resolved.
     - Suggestions for improvement, if any.

---

**Note:**  
- Follow the Figma designs closely.  
- Focus on clean, maintainable code.  
- Properly handle API responses for the `/contact` page.  
- Record the time spent on each task for accuracy and transparency.  
- If you improve the UX/UI, clearly document your changes and reasoning.
