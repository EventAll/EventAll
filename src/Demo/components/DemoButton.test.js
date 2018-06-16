import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import DemoButton from './DemoButton';

// Top-level describes should always be named with the component name.
describe('<DemoButton />', () => {
  /*
  Typically we want to test for two things: Structure and functionality.
  Structure ensures that the layout of our component is expected (i.e: things render correctly)
  Functionality tests for things such as expected changes when we press on a button, etc
  */
  describe('Structure', () => {
    /*
    Snapshot tests: Jest will create a JSON structure of your component inside the __snapshots__ folder
    based off of the output of the test the first time you run it. Everytime you run the test thereafter,
    it will diff the JSON representation of your component inside the snapshots folder with the new JSON
    structure created based off of your current component. If they're different, the test fails.
  */
    it('renders correctly', () => {
      const json = renderer.create(<DemoButton />).toJSON();
      expect(json).toMatchSnapshot();
    });

    it('The text renders correctly', () => {
      // Mount renders the entire react component and calls all of the lifecycle methods. It also renders the children of the component.
      // In this case, since DemoButton has a <Button /> as its child, we find the button and extract the title prop from it.
      const demoButton = mount(<DemoButton />);
      expect(demoButton.find('Button').prop('title')).toBe('Demo Button');
    });
  });

  describe('Functionality', () => {
    it('handles onPress callback', () => {
      // In order to test if a function has been called, we can mock the function and pass it down as props to the component.
      // We then simulate a click and make sure that the spy has been called once.
      const onPressSpy = jest.fn();
      // Shallow doesn't call the lifecycle methods and doesn't render the children of the component
      const demoButton = shallow(<DemoButton onPress={onPressSpy} />);
      demoButton.find('Button').simulate('press');
      expect(onPressSpy).toHaveBeenCalledTimes(1);
    });
  });
});
