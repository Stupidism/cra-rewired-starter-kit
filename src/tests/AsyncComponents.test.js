import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import AsyncHomePage from 'routes/HomePage';
import AsyncNotFoundPage from 'routes/NotFoundPage';
import AsyncDependencies from 'components/Dependencies';
import AsyncDevDependencies from 'components/DevDependencies';

const AsyncComponents = {
  AsyncHomePage,
  AsyncNotFoundPage,
  AsyncDependencies,
  AsyncDevDependencies,
};

describe('<AsyncComponent />', () => {
  _.forEach(AsyncComponents, (AsyncComponent, name) => {
    test(`<${name} /> should render a Loader first and then itself`, async () => {
      expect(AsyncComponent.name).toEqual('LoadableComponent');
      const wrapper = shallow(<AsyncComponent />);
      expect(wrapper.dive()).toMatchSnapshot();
      await AsyncComponent.preload();
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
