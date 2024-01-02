describe("Add a todo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add a todo", () => {
    const newTodo = "Buy milk";

    cy.get("[data-test='task-form-input']").as("taskFormInput");
    cy.get("@taskFormInput").type(`${newTodo}{enter}`);
  });

  it("should contain the new todo", () => {
    const newTodo = "Buy milk";

    cy.get("[data-test='task-form-input']").as("taskFormInput");
    cy.get("@taskFormInput").type(`${newTodo}{enter}`);

    cy.get("[data-test='tasks-list'] article").as("tasksList");

    cy.get("@tasksList").each(($task) => {
      cy.wrap($task).should("contain", newTodo);
    });
  });
});

describe("Remove a todo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.get("[data-test='task-form-input']").as("taskFormInput");
    cy.get("@taskFormInput").type("Buy milk{enter}");
  });

  it("should remove the last todo", () => {
    cy.get("[data-test='tasks-list'] article").last().as("lastTask");

    cy.get("@lastTask").find("[data-test='remove-button']").click();
  });

  it("should remove the todo from the screen", () => {
    cy.get("[data-test='tasks-list'] article").last().as("lastTask");

    cy.get("@lastTask").find("[data-test='remove-button']").click();

    cy.get("[data-test='tasks-list'] article").should("have.length", 0);
  });
});

describe("Complete a todo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.get("[data-test='task-form-input']").as("taskFormInput");
    cy.get("@taskFormInput").type("Buy milk{enter}");
  });

  it("should complete the last todo", () => {
    cy.get("[data-test='tasks-list'] article").last().as("lastTask");

    cy.get("@lastTask").find("[data-test='complete-button']").click();
  });
});
