import renderer from 'react-test-renderer'
import Users from '../components/UsersClassCompt'

test("Test method in class component", () => {
    const componentData = renderer.create(<Users />).getInstance()

    expect(componentData.getUserList()).toMatch('user list')
})