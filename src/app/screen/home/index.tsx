import utility from "../../../utils/utility";
import { AppText, FlexColumn, ScreenContainer,CenterPopup, AppLink } from "../../app-styles";
import { Button } from "../../../components/Button";
import { User } from "../../../components/user";
import { Private } from "../../../components/auth/Private";
import { Profile } from "../../../components/auth/Profile";
import { List } from "../../../components/generics/Lists";

const Screen = () => {
  return (
    <>
      <FlexColumn>
        <AppText textSize="5" color="#000" fontWeight="300">
          My Name is Jubril
        </AppText>
        {/* <Button hoverBgColor="#6DE7" hoverColor="#fff">Submit</Button> */}
        <Button handleClick={(event) => console.log('kkjjj', event)} />
        <User />
        <Private isLoggedIn={true} component={Profile} />
        <List items={['Batman', 'Superman',  'Wonder Woman']} onClick ={ (item) => console.log(item)}  />
        <List items={[1,2,3]} onClick ={ (item) => console.log(item)}  />
        {/* <List items={[
          {
            firstname: 'Bruce',
            lastname: 'Wayne'
          },
          {
            firstname: 'Clark',
            lastname: 'Kent'
          },
          {
            firstname: 'Princess',
            lastname: 'Diana'
          }
        ]} onClick ={ (item) => console.log(item)}  /> */}
        <CenterPopup bgColor="red">
          <AppText fontWeight="600" textSize="5">My name is jubril</AppText>
          <AppLink hasBottomBorder>i am a link</AppLink>
        </CenterPopup>
      </FlexColumn>
      ;
    </>
  );
};

export default utility.routeData("/", <Screen />, "index");
