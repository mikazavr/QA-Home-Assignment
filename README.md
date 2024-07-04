# Test Assignment  

This project showcases my skills in web user interface and API testing, demonstrating my ability to ensure the quality and reliability of web applications.

## Assignment Overview
For this assignment, I focused on the publicly available Conduit sample application. The tasks involved creating a comprehensive suite of both manual and automated tests to cover key functionalities, as well as proposing improvements to enhance the application's quality.

### Exploration and Initial Testing
I began this project with an exploratory phase, thoroughly investigating the [Conduit](https://conduit.realworld.how) sample application to understand its functionality and identify key areas for testing. This initial exploration involved using the application as an end-user would, noting any potential issues or areas of improvement.

### Manual Testing
Based on the results gained during the exploration phase, I developed a set of manual tests focusing on the most critical areas of the system. I employed a risk-based strategy, prioritizing tests that would have the highest impact on user experience and system stability. The manual tests covered functionalities such as sign up, user login, global feed, navigation to an article, and creation of a new article. These tests were documented in detail to ensure that others could replicate them and achieve consistent results.

### Automation Strategy for UI 
After establishing the manual tests, I came up with a strategy for automation. The approach was to prioritize automating the main user flows. For UI automation, I chose Cypress.io tool due to its simplicity, fast test execution, and convinient debugging tools. Despite its limitations in cross-browser support and external integration, Cypress's advantages for quick, reliable testing in a JavaScript environment made it suitable for this project.

### API Testing
For automated API testing, I selected Postman due to its user-friendly interface and powerful features. Postman simplifies the process of building and executing API requests, making it accessible even for those with minimal coding experience. Although Postman may have limitations in scalability and advanced debugging compared to dedicated testing frameworks, its ease of use, robust feature set, and integration capabilities with CI/CD pipelines make it an excellent choice for this project.

### Final Considerations
- As the project was not a real production application, I automated tests in a prod-like environment, operating without direct access to the underlying implementation. Some tests rely on HTML element selectors, which may not be future-proof. 
- Enhancing the setup with tools like Allure for reporting and integrating CI/CD for automated test runs would be beneficial for ongoing development and maintenance.

1. [Manual tests](./manual-tests/)
2. [UI automated tests](./ui-automated-tests/)
3. [API automated tests](./api-automated-tests/)
4. [Suggestions](./suggestions.md)
