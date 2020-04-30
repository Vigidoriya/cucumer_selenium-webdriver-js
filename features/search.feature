@all
Feature: Search product

  @single
  Scenario: Running a Full Text Quick Search
    Given the user opens the Google search page
    When the user searches the product "Dell"
    Then the user sees term query "Dell" in the first result at the Search Result grid

  @ignore
  Scenario Outline: Running a Full Text Quick Search with options
    Given the user opens the Google search page
    When the user searches the product "<request>"
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

  @table
  Scenario: Cucumber tricks
    Given the user selects report "Year 2020" at the Annual Reports page
    And the user selects "Year 2019" report at the Annual Reports page
    # /////////////////////////////////////////////////////////////
    Then the user sees 2 results at the Search Result grid
    Then the user sees 2 result at the Search Result grid
    # /////////////////////////////////////////////////////////////
    Then the response should be JSON
      """
      [
        {
          "name": "BMW X5",
          "color": "Blue"
        },
        {
          "name": "UAZ Patriot",
          "color": "Blue"
        }
      ]
      """
