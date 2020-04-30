@all
Feature: Search product

  @single
  Scenario: Running a Full Text Quick Search
    Given the user open the Google search page
    When the user search the product "Dell"
    Then the user sees term query "Dell" in the first result at the Search Result grid

  @ignore
  Scenario Outline: Running a Full Text Quick Search with options
    Given the user open the Google search page
    When the user search the product "<request>"
    Then the user sees term query "<request>" in the first result at the Search Result grid

    Examples:
      | request |
      | Nokia   |
      | Samsung |

  @table
  Scenario: Table example
    Given table example with raw and rows
      | Header 1 Column | Header 2 Column |
      | 1 row 1 column  | 1 row 2 column  |
      | 2 row 1 column  | 2 row 2 column  |