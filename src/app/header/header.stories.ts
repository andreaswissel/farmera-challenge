import {HeaderComponent} from './header.component';
import {moduleMetadata} from '@storybook/angular';
import {HeaderModule} from './header.module';
import {animalGroupMocks} from '../animal/animal-group.mocks';

const Template = (args: HeaderComponent) => ({
    component: HeaderComponent,
    props: args
});

export default {
    title: 'Components/Header',
    decorators: [
        moduleMetadata({
            imports: [
                HeaderModule
            ]
        })
    ]
};

export const Default = Template.bind({});
Default.args = {
    animalGroup: animalGroupMocks[0]
};
