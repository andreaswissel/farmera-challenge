import {UserComponent} from './user.component';

const Template = (args: UserComponent) => ({
  component: UserComponent,
  props: args
});

export default {
  title: 'Components/UserComponent'
};

export const Default = Template.bind({});
