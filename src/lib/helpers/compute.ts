import { IAssignedSkills } from '../../interfaces'

export const computeTotalSkills = (assigned_skills: IAssignedSkills | null) => {
  if (assigned_skills !== null) {
    return Object.keys(assigned_skills)
      .reduce((prev, curr): number => {
        return (
          assigned_skills === null
            ? prev
            : prev + assigned_skills[curr].asigned_value
        )
      }, 0)
  } else {
    return 0
  }
}