import "./App.css";
// import BottomNavigationMui from "./components/BottomNavigationMui";
import BreadcrumbsMui from "./components/BreadcrumbsMui";
import DrawerMui from "./components/DrawerMui";
// import LinkMui from "./components/LinkMui";
import NavbarMui from "./components/NavbarMui";
import SpeedDialMui from "./components/SpeedDialMui";
import AvatarMui from "./components/displaycomponent/AvatarMui";
import BadgeMui from "./components/displaycomponent/BadgeMui";
import ChipMui from "./components/displaycomponent/ChipMui";
import ListMui from "./components/displaycomponent/ListMui";
import TableMui from "./components/displaycomponent/TableMui";
import ToolTipMui from "./components/displaycomponent/ToolTipMui";
import AlertMui from "./components/feedbackcomponent/AlertMui";
import DialogMui from "./components/feedbackcomponent/DialogMui";
import ProgressMui from "./components/feedbackcomponent/ProgressMui";
import SkeletonMui from "./components/feedbackcomponent/SkeletonMui";
import SnackbarMui from "./components/feedbackcomponent/SnackBarMui";
import LoadingButtonMui from "./components/materiallab/LoadingButtonMui";
import DatePickerMui from "./components/materiallab/DatePickerMui";
import TimePickerMui from "./components/materiallab/TimePickerMui";
import TabsMui from "./components/materiallab/TabsMui";
import TimelineMui from "./components/materiallab/TimelineMui";
import MasonryMui from "./components/materiallab/MasonryMui";
// import ImageListMui from "./components/ImageListMui";
// import AccordionMui from "./components/AccordionMui";
// import CardMui from "./components/CardMui";
// import AutoCompleteMui from "./components/AutoCompleteMui";
// import LayoutMui from "./components/LayoutMui";
// import RatingMui from "./components/RatingMui";
// import CheckBoxMui from "./components/CheckBoxMui";
// import SwitchMui from "./components/SwitchMui";
// import RadioButtonMui from "./components/RadioButtonMui";
// import SelectComponentMui from "./components/SelectComponentMui";
// import ButtonMui from './components/ButtonMui';
// import MuiTypography from './components/MuiTypography';
// import TextFieldMui from './components/TextFieldMui';

function App() {
  return (
    //initial setup to work with date and time picker in MUI
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <ButtonMui /> */}
      {/* <TextFieldMui /> */}
      {/* <SelectComponentMui /> */}
      {/* <RadioButtonMui /> */}
      {/* <CheckBoxMui /> */}
      {/* <SwitchMui /> */}
      {/* <RatingMui /> */}
      {/* <AutoCompleteMui /> */}
      {/* <LayoutMui /> */}
      {/* <CardMui /> */}
      {/* <AccordionMui /> */}
      {/* <ImageListMui /> */}
      <NavbarMui />
      {/* <LinkMui /> */}
      <BreadcrumbsMui />
      {/* <BottomNavigationMui /> */}
      <DrawerMui />
      <SpeedDialMui />
      <AvatarMui />
      <BadgeMui />
      <ListMui />
      <ChipMui />
      <ToolTipMui />
      <TableMui />
      <AlertMui />
      <SnackbarMui />
      <DialogMui />
      <ProgressMui />
      <SkeletonMui />
      <LoadingButtonMui />
      <DatePickerMui />
      <TimePickerMui />
      <TabsMui />
      <TimelineMui />
      <MasonryMui />
    </div>
  );
}

export default App;
