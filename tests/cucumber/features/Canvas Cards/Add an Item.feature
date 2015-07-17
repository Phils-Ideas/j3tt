@tag-an-item
Feature: Tagging a Card Item
  The Canvas cards are used to describe the very high level goals of the product.
  Adding an item into a Lean Canvas Card with a tag links it to the features associated and to the Waffle work items so that the information 
  can be shown in the cards as an overall and for each item.  This is the primary signalling back to the product owner
  about the goal used to determine the outcome of the experiment.
  
  Background: 
    Given Make sure you are logged in to the Lean Canvas 
  
  Scenario: Adding a new item to a canvas card
    Given Click into the lower part of the card
    When Type the title of the item
    And Add the tag "test-tag-1" in the field below
    Then A new item is added to the card with the tag "test-tag-1"