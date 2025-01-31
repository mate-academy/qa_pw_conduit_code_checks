# Practice task: Set up automatic code checks for Conduit project

## Preparation:

1. Open the forked repo in VSCode.
2. Create a new branch: git checkout -b added_article_test
3. Run the installation commands `npm ci` & `npx playwright install`.

## Main task:

1. Set up the ESLint using the instructions from the theory.

- Run the `npx eslint` command and make sure you see the list of errors.
- Fix all the bugs in the code.

2. Set up the Prettier using the instructions from the theory block.
3. Set up the Husky and Lint-staged using the instructions from the theory block.
4. Re-run all your tests and make sure they pass after the updates.
5. Commit all your updates.

- To see all the ESlint errors in the terminal, you can run the ` git commit -m “<commit message>` from the terminal.
- Fix all remaining mistakes if they exist. You will not be able to do a commit until you fix the errors.

## Task Reporting:

1. Push the code to the origin.
2. Create PR for your changes.
3. Fix all the suggestions from the Code review until PR is approved.
