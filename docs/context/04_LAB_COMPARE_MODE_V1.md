# Pourō LAB Compare Mode v1

Display:
- LAB

Japanese helper:
- 比較抽出

## Definition

LAB v1 is not a free-form advanced settings screen.

LAB v1 is a comparison brewing mode where the user changes exactly one independent variable, brews a candidate cup, evaluates the result, and records observations and next hypotheses.

## Principle

Baseline  
→ one variable change  
→ candidate  
→ evaluation  
→ result  
→ next hypothesis

Do not infer causality from a single result.

## Not v1

- Free step editor
- Multiple variables
- AI optimization
- Statistical significance
- Bluetooth scale
- TDS integration
- Blind cupping
- Public ranking

These belong to future LAB Studio or later phases.

## Entry Points

No bottom tab.

Entries:

- Home secondary CTA
- History Detail: start LAB from this record
- Finish: compare next cup from this result

## Variable Rule

One independent variable per candidate.

Allowed v1 variables:

- grind
- water_temperature
- brew_ratio
- coffee_dose
- pour_pattern
- pour_interval
- agitation

Derived changes are allowed when caused by the selected variable.

Example:

brew_ratio 1:15 → 1:16  
Derived:
- total water changes
- step water amounts change

This is still one independent variable.

## Difference Classification

- independent
- derived
- context
- execution_deviation

## Control Status

Recommended:

- strict_same_session
- strict_historical
- uncontrolled_context
- invalid_multi_variable
- incomplete

## Core Data

LabExperiment:
- id
- title
- status
- objective
- hypothesis
- independentVariable
- baselineTrialId
- candidateTrialIds
- comparisonMode
- controlStatus
- conclusion
- timestamps
- schemaVersion

LabTrial:
- id
- experimentId
- role
- plannedSnapshot
- actualSnapshot
- independentChange
- derivedChanges
- contextDifferences
- executionDeviations
- evaluations
- timestamps

LabEvaluation:
- temperatureStage
- scores
- tasteNotes
- impression
- defects

LabConclusion:
- preference
- confidence
- observation
- interpretation
- nextHypothesis
- promotedBaselineTrialId

## Critical Improvements

- Store ChangeIntent.
- Candidate generation must be pure logic, not UI code.
- Use normal Brew Runner with LabBrewContext.
- Save timerElapsedSec, wallElapsedSec, pausedDurationSec.
- evaluations should be an array.
- Incomplete LAB can be saved.
- Completion requires preference and confidence.
- “Difference not perceivable” is valid.
- Observation and Interpretation must be separated.
