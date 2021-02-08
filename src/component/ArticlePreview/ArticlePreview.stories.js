import React from 'react';
import StoryRouter from 'storybook-react-router';
import preview from '../../stories/assets/articlePreview.jpeg'
import { ArticlePreview } from './ArticlePreview';

export default {
    title: 'ArticlePreview',
    component: ArticlePreview,
    decorators: [StoryRouter()],
    argTypes: {
        title: { control: { type: 'text' } },
        content: {
            control: {
                type: 'array',
                separator: '\n'
            }
        },
        img: { 
            description: 'image obj must have path and name',
            control: { type: 'object' } 
        },
        link: { control: { type: 'text' } },
        orientation: {
            control: {
                type: 'select',
                options: ['previewLeft', 'previewRight']
            }
        }
    }
}

const Template = args => <ArticlePreview { ...args } />

export const Right = Template.bind({});
Right.args = {
    title: 'Инновационный подход к проектированию',
    content: [
        'Компания - независимая инжиниринговая и консалтинговая компания. Наш опыт, знания и современные технологии позволяют решить задачу любой сложности. Мы клиентоориентированная компания, для которой всегда в приоритете интересы Заказчика. Мы ценим Ваше время и гарантируем высокое качество услуг.',
        'Мы помогаем нашим Клиентам ускорить развитие своего бизнеса через внедрение  современных технологий. Наши инженерные решения основанные на BIM подходе (Информационного моделирования зданий и сооружений - Building Information Modelling), что позволяет нам максимально автоматизировать процесс проектирования,  повысить качество работ, свести до минимума ошибки. Данные факторы увеличивают конкурентность на рынке и уникальность среди компаний, работающих в данной технологии на рынке.'
    ],
    img: {
        path: preview,
        name: 'preview'
    },
    link: '/test',
    orientation: 'previewRight'
}