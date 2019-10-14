import fp from 'lodash/fp'
import {arrayObjToObj} from '../helpers/get'
export const CURRENCY_NAME = 'сум'

export const EDUCATION = [
  {id: 'irrelevant', name: 'Не имеет значения'},
  {id: 'average', name: 'Среднее'},
  {id: 'lower_secondary', name: 'Неполное среднее'},
  {id: 'secondary_special', name: 'Средне-специальное'},
  {id: 'incomplete_higher', name: 'Незаконченное высшее'},
  {id: 'higher', name: 'Высшее'},
  {id: 'academic_degree', name: 'Ученая степень'}
]

export const EXPERIENCES_LIST = [
  {id: 'undefined', name: 'Не имеет значения'},
  {id: '5', name: 'Без опыта'},
  {id: '1', name: 'от 1 до 3 лет'},
  {id: '2', name: 'от 3 до 5 лет'},
  {id: '3', name: 'от 6 до 10 лет'},
  {id: '4', name: 'более 10 лет'}
]
export const SEARCH_TYPE = [
  {id: 'company', name: 'Компании'},
  {id: 'sphere', name: 'Сфера деятельности'}
]

export const EMPLOYMENT_TYPE = [
  {id: 'full_time', name: 'Полный рабочий день'},
  {id: 'part_time', name: 'Неполный рабочий день'},
  {id: 'shift_time', name: 'Посменный график'},
  {id: 'temporary', name: 'Временная работа'},
  {id: 'freelance', name: 'Удаленная работа (фриланс)'}
]

export const ACTIVITY_TYPE = [
  {id: 'full_time', name: 'Полная занятость'},
  {id: 'part_time', name: 'Частичная занятость'},
  {id: 'temporary', name: 'Проектна/Временная работа'},
  {id: 'volunteer', name: 'Волонтерство'},
  {id: 'intern', name: 'Стажировка'}
]
export const EDUCATION_KEYS = arrayObjToObj(EDUCATION)

export const EMP_TYPE = [
  {id: 'ООО', name: 'ООО'},
  {id: 'ПАО', name: 'ПАО'},
  {id: 'АО', name: 'АО'},
  {id: 'УП', name: 'УП'},
  {id: 'Нек. орг.', name: 'Нек. орг.'},
  {id: 'Общ. орг.', name: 'Общ. орг.'},
  {id: 'Фонд', name: 'Фонд'},
  {id: 'Гос. корп.', name: 'Гос. корп.'},
  {id: 'ИП', name: 'ИП'},
  {id: 'ОАО', name: 'ОАО'},
  {id: 'ЗАО', name: 'ЗАО'},
  {id: 'ТОО', name: 'ТОО'},
  {id: 'Другое', name: 'Другое'}
]

export const CURRENCY_LIST = [
  {id: null, name: ' '},
  {id: 'ue', name: 'U.E.'},
  {id: 'sum', name: 'UZS'}
]

export const EDU_TYPE = [
  {id: 'full_time', name: 'Очная'},
  {id: 'part_time', name: 'Заочная'},
  {id: 'temporary', name: 'Очно-заочная'},
  {id: 'volunteer', name: 'Дистанционная'}
]

export const COMP_LITERACY = [
  {id: 'none', name: 'Не владею'},
  {id: 'elementary', name: 'Начальный'},
  {id: 'average_user', name: 'Средний пользователь'},
  {id: 'advanced_user', name: 'Продвинутый пользователь'},
  {id: 'expert', name: 'Эксперт'},
  {id: 'irrelevant', name: 'Не имеет значения'},
  {id: 'basic_level', name: 'Базовый уровень'},
  {id: 'confident_user', name: 'Уверенный пользователь'}
]

export const GENDER = {
  male: 'Мужчина',
  female: 'Женщина',
  irrelevant: 'Не имеет значения'
}

export const COMP_LITERACY_KEYS = arrayObjToObj(COMP_LITERACY)

export const DRIVER_LICENSE = [
  {id: 'A', name: 'A'},
  {id: 'B', name: 'B'},
  {id: 'C', name: 'C'},
  {id: 'D', name: 'D'}
]

export const SORT_LIST_BY = [
  {id: 'createdDate', name: 'По дате'}
]

export const getExpValue = (id) => fp.flow(
  fp.find({id: fp.toString(id)}),
  fp.get('name')
)(EXPERIENCES_LIST)

export const getEmpTypeValue = (id) => fp.flow(
  fp.find({id}),
  fp.get('name')
)(EMPLOYMENT_TYPE)

