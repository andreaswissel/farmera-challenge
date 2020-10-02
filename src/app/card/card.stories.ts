import {CardComponent} from './card.component';
import {moduleMetadata} from '@storybook/angular';
import {CardModule} from './card.module';
import {IonicModule} from '@ionic/angular';

const Template = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
});

export default {
  title: 'Components/Card',
  decorators: [moduleMetadata({
    imports: [IonicModule.forRoot(), CardModule]
  })]
};

export const Default = Template.bind({});
Default.args = {
  isExtendable: true
};
