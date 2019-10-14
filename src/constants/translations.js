import React from 'react'
import loMerge from 'lodash/merge'
import sprintf from 'sprintf'
// Import * as TR from './appTranslations'
import {STATIC_PAGE_ITEM_URL} from 'constants/routes'

// Const otherTranslations = loMerge(
//   TR.commonTranslations,
//   TR.genders,
//   TR.maritalStatuses,
//   TR.educationLevels,
//   TR.experiences,
//   TR.employementTypes,
//   TR.compLiteracyLevel,
//   TR.months,
//   TR.languageLevels,
//   TR.companyForms,
//   TR.applicantStatuses
// )

// Const getTermsLink = text => {
//   Return <a target={'_blank'} href={sprintf(STATIC_PAGE_ITEM_URL, 'userterms')}>{text}</a>
// }

const translations = {
  // ...otherTranslations,

  // 'menu_applicant': {
  //   Ru: 'Ищу работу',
  //   En: 'Job seeker',
  //   Uz: 'Ish qidiruvchi'
  // },
  main: {
    ru: 'Главная',
    en: 'Main',
    uz: 'Asosiy'
  },
  accreditations: {
    ru: 'Аккредитации',
    en: 'Accreditations',
    uz: 'Akkreditasiya'
  },
  documents: {
    ru: 'Документы',
    en: 'Documents',
    uz: 'Hujatlar'
  },
  services: {
    ru: 'Сервисы',
    en: 'Services',
    uz: 'Servislar'
  },
  information: {
    ru: 'Информация',
    en: 'Information',
    uz: 'Ma’lumot'
  },
  contacts: {
    ru: 'Контакты',
    en: 'Contacts',
    uz: 'Bog’lanish'
  },
  main_title: {
    ru: 'ГУП "ЦЕНТР ПО АККРЕДИТАЦИИ"',
    en: 'SUE "CENTER FOR ACCREDITATION"',
    uz: 'SUE "CENTER FOR ACCREDITATION"'
  },
  about: {
    ru: 'О нас',
    en: 'About us',
    uz: 'Biz Haqimizda'
  },
  reestr: {
    ru: 'Поиск по реестру субъектов аккредитации',
    en: 'Search in the register of subjects of accreditation',
    uz: 'Search in the register of subjects of accreditation'
  },
  learning: {
    ru: 'Обучение оценщиков и технических эскпертов',
    en: 'Training appraisers and technical experts',
    uz: 'Training appraisers and technical experts'
  },
  only_reestr: {
    ru: 'Единый реестр органов по сертификации и испытательных лабораторий (центров) ЕАЭС ',
    en: 'Unified Register of Certification Bodies and Testing Laboratories (Centers) of the EAEU',
    uz: 'Unified Register of Certification Bodies and Testing Laboratories (Centers) of the EAEU'
  },
  personal_kabinet: {
    ru: 'Личный кабинет заявителя',
    en: 'Personal account of the applicant',
    uz: 'Personal account of the applicant'
  },
  news: {
    ru: 'Новости ',
    en: 'News',
    uz: 'Xabarlar'
  },
  all_news: {
    ru: 'Все новости',
    en: 'All news',
    uz: 'Hamma xabarlar'
  },
  media: {
    ru: 'Медиа',
    en: 'Media',
    uz: 'Media'
  },
  all_media: {
    ru: 'Все медиа',
    en: 'All media',
    uz: 'Hamma media'
  },
  about_company: {
    ru: 'О компании',
    en: 'About company',
    uz: 'Kompaniya haqida'
  },
  description_company: {
    ru: '"Национальный центр аккредитации" — Комитета технического регулирования и метрологии Министерство индустрии и инфраструктурного развития Республики Узбекистана (НЦА) является органом по аккредитации в области оценки соответствия и осуществляет свою деятельность руководствуясь Законом Республики Узбекистана "Об аккредитации в области оценки соответствия".\n',
    en: '\n' +
      '"National Accreditation Center" - Committee for Technical Regulation and Metrology The Ministry of Industry and Infrastructure Development of the Republic of Uzbekistan (NCA) is an accreditation body in the field of conformity assessment and conducts its activities guided by the Law of the Republic of Uzbekistan "On Accreditation in the field of conformity assessment".',
    uz: '\n' +
      '"National Accreditation Center" - Committee for Technical Regulation and Metrology The Ministry of Industry and Infrastructure Development of the Republic of Uzbekistan (NCA) is an accreditation body in the field of conformity assessment and conducts its activities guided by the Law of the Republic of Uzbekistan "On Accreditation in the field of conformity assessment".'
  },
  feedback: {
    ru: 'Обратная связь',
    en: 'Feedback',
    uz: 'Feedback'
  },
  language: {
    ru: 'Русский',
    en: 'English',
    uz: 'Ўзбекча'
  }

}

export default translations
