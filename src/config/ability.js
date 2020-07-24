import { Ability, AbilityBuilder, detectSubjectType } from '@casl/ability'

export function defineRulesFor () {
  const { can, rules } = new AbilityBuilder()

  can(['login', 'logout'])

  return rules
}

function detectAppSubjectType (subject) {
  if (subject && typeof subject === 'object' && subject.kind) {
    return subject.kind
  }

  return detectSubjectType(subject)
}

export function defineAbilityFor () {
  return new Ability(defineRulesFor(), {
    detectSubjectType: detectAppSubjectType
  })
}
