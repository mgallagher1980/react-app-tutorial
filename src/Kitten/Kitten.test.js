import Kitten from "./Kitten";
import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";

var kittenModel = {
  title: "something",
  images: {
    preview_gif: {
      url: "/"
    }
  }
};
describe('Kitten', () => {
  let kitten = null;

  beforeEach(() => {
    kitten = <Kitten kitten={kittenModel} />;
  });
  it('cuteness should be 99', () => {

    const rendered = renderer.create(kitten);

    const instance = rendered.getInstance();
    
    expect(instance.cuteness()).toBe(99);

  });

  it('should render the title as a paragraph', () => {

    const rendered = renderer.create(kitten);

    const p = rendered.root.findByType("p");

    expect(p.children.length).toBe(1);
    expect(p.children[0]).toBe(kittenModel.title);

  });

  it('should have title in a p', () => {
    const renderer = new ShallowRenderer();
    renderer.render(kitten);
    const result = renderer.getRenderOutput();

    expect(result.props.children[0].props.children).toBe(kittenModel.title);
  });

  it('should have title enzyme', () => {
    const rendered = shallow(kitten);

    expect(rendered.find("p").text()).toBe(kittenModel.title);
  });

  it('should match snapshot2', () => {
    const rendered = renderer.create(kitten);
    const tree = rendered.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});