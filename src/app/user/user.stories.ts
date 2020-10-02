import {UserComponent} from './user.component';
import {moduleMetadata} from '@storybook/angular';
import {UserModule} from './user.module';
import {TimeagoModule} from 'ngx-timeago';
import {UserMocks} from './user.mocks';

const Template = (args: UserComponent) => ({
    component: UserComponent,
    props: args
});

export default {
    title: 'Components/User',
    decorators: [moduleMetadata({
        imports: [UserModule, TimeagoModule.forRoot()]
    })]
};

export const Default = Template.bind({});
Default.args = {
    user: UserMocks[0]
};
