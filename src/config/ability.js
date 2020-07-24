import { AbilityBuilder, Ability, detectSubjectType } from '@casl/ability'

export function defineRulesFor () {
  const { can, rules } = new AbilityBuilder()

  can(['read', 'create'])
  // can(['update', 'delete'], 'Todo', { assignee: 'me' })

  return rules
}

/**
 * Read for details: https://stalniy.github.io/casl/v4/en/guide/subject-type-detection
 */
function detectAppSubjectType (subject) {
  if (subject && typeof subject === 'object' && subject.kind) {
    return subject.kind
  }

  return detectSubjectType(subject)
}

export function buildAbilityFor () {
  return new Ability(defineRulesFor(), {
    detectSubjectType: detectAppSubjectType
  })
}
