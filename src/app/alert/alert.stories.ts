import {AlertComponent} from './alert.component';
import {moduleMetadata} from '@storybook/angular';
import {IonicModule} from '@ionic/angular';
import {alertMocks} from './alert.mocks';
import {TimeagoModule} from 'ngx-timeago';

const Template = (args: AlertComponent) => ({
  component: AlertComponent,
  props: args
});

export default {
  title: 'Components/Alert',
  decorators: [moduleMetadata({
    imports: [IonicModule.forRoot(), TimeagoModule.forRoot()]
  })]
};

export const Default = Template.bind({});
Default.args = {
  alert: alertMocks[0]
};
