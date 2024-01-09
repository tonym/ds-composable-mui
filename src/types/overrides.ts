import { StyleRules } from './types';
import {
  AccordionClasses,
  AccordionActionsClasses,
  AccordionDetailsClasses,
  AccordionSummaryClasses,
  AlertClasses,
  AlertTitleClasses,
  AppBarClasses,
  AvatarClasses,
  AvatarGroupClasses,
  BackdropClasses,
  BadgeClasses,
  BottomNavigationClasses,
  BottomNavigationActionClasses,
  BreadcrumbsClasses,
  ButtonClasses,
  ButtonBaseClasses,
  ButtonGroupClasses,
  CardClasses,
  CardActionAreaClasses,
  CardActionsClasses,
  CardContentClasses,
  CardHeaderClasses,
  CardMediaClasses,
  CheckboxClasses,
  ChipClasses,
  CircularProgressClasses,
  CollapseClasses,
  ContainerClasses,
  DialogClasses,
  DialogActionsClasses,
  DialogContentClasses,
  DialogContentTextClasses,
  DialogTitleClasses,
  DividerClasses,
  DrawerClasses,
  FabClasses,
  FilledInputClasses,
  FormControlClasses,
  FormControlLabelClasses,
  FormGroupClasses,
  FormHelperTextClasses,
  FormLabelClasses,
  GridClasses,
  IconClasses,
  IconButtonClasses,
  ImageListClasses,
  ImageListItemClasses,
  ImageListItemBarClasses,
  InputClasses,
  InputAdornmentClasses,
  InputBaseClasses,
  InputLabelClasses,
  LinearProgressClasses,
  LinkClasses,
  ListClasses,
  ListItemClasses,
  ListItemAvatarClasses,
  ListItemButtonClasses,
  ListItemIconClasses,
  ListItemSecondaryActionClasses,
  ListItemTextClasses,
  ListSubheaderClasses,
  MenuClasses,
  MenuItemClasses,
  MenuListClasses,
  MobileStepperClasses,
  ModalClasses,
  NativeSelectClasses,
  OutlinedInputClasses,
  PaginationClasses,
  PaginationItemClasses,
  PaperClasses,
  PopoverClasses,
  RadioClasses,
  RatingClasses,
  SelectClasses,
  SkeletonClasses,
  SliderClasses,
  SnackbarClasses,
  SnackbarContentClasses,
  StackClasses,
  StepClasses,
  StepButtonClasses,
  StepConnectorClasses,
  StepContentClasses,
  StepIconClasses,
  StepLabelClasses,
  StepperClasses,
  SvgIconClasses,
  SwipeableDrawerClasses,
  SwitchClasses,
  TabClasses,
  TableClasses,
  TableBodyClasses,
  TableCellClasses,
  TableContainerClasses,
  TableFooterClasses,
  TableHeadClasses,
  TablePaginationClasses,
  TableRowClasses,
  TableSortLabelClasses,
  TabsClasses,
  TabScrollButtonClasses,
  TextFieldClasses,
  ToggleButtonClasses,
  ToggleButtonGroupClasses,
  ToolbarClasses,
  TooltipClasses,
  TypographyClasses
} from '../components/index';

export type Overrides = {
  [Name in keyof ComponentNameToClasses]?: Partial<StyleRules<ComponentNameToClasses[Name]>>;
};

export interface ComponentNameToClasses {
  Accordion: AccordionClasses;
  AccordionActions: AccordionActionsClasses;
  AccordionDetails: AccordionDetailsClasses;
  AccordionSummary: AccordionSummaryClasses;
  Alert: AlertClasses;
  AlertTitle: AlertTitleClasses;
  AppBar: AppBarClasses;
  Avatar: AvatarClasses;
  AvatarGroup: AvatarGroupClasses;
  Backdrop: BackdropClasses;
  Badge: BadgeClasses;
  BottomNavigation: BottomNavigationClasses;
  BottomNavigationAction: BottomNavigationActionClasses;
  Breadcrumbs: BreadcrumbsClasses;
  Button: ButtonClasses;
  ButtonBase: ButtonBaseClasses;
  ButtonGroup: ButtonGroupClasses;
  Card: CardClasses;
  CardActionArea: CardActionAreaClasses;
  CardActions: CardActionsClasses;
  CardContent: CardContentClasses;
  CardHeader: CardHeaderClasses;
  CardMedia: CardMediaClasses;
  Checkbox: CheckboxClasses;
  Chip: ChipClasses;
  CircularProgress: CircularProgressClasses;
  Collapse: CollapseClasses;
  Container: ContainerClasses;
  Dialog: DialogClasses;
  DialogActions: DialogActionsClasses;
  DialogContent: DialogContentClasses;
  DialogContentText: DialogContentTextClasses;
  DialogTitle: DialogTitleClasses;
  Divider: DividerClasses;
  Drawer: DrawerClasses;
  Fab: FabClasses;
  FilledInput: FilledInputClasses;
  FormControl: FormControlClasses;
  FormControlLabel: FormControlLabelClasses;
  FormGroup: FormGroupClasses;
  FormHelperText: FormHelperTextClasses;
  FormLabel: FormLabelClasses;
  Grid: GridClasses;
  Icon: IconClasses;
  IconButton: IconButtonClasses;
  ImageList: ImageListClasses;
  ImageListItem: ImageListItemClasses;
  ImageListItemBar: ImageListItemBarClasses;
  Input: InputClasses;
  InputAdornment: InputAdornmentClasses;
  InputBase: InputBaseClasses;
  InputLabel: InputLabelClasses;
  LinearProgress: LinearProgressClasses;
  Link: LinkClasses;
  List: ListClasses;
  ListItem: ListItemClasses;
  ListItemAvatar: ListItemAvatarClasses;
  ListItemButton: ListItemButtonClasses;
  ListItemIcon: ListItemIconClasses;
  ListItemSecondaryAction: ListItemSecondaryActionClasses;
  ListItemText: ListItemTextClasses;
  ListSubheader: ListSubheaderClasses;
  Menu: MenuClasses;
  MenuItem: MenuItemClasses;
  MenuList: MenuListClasses;
  MobileStepper: MobileStepperClasses;
  Modal: ModalClasses;
  NativeSelect: NativeSelectClasses;
  OutlinedInput: OutlinedInputClasses;
  Pagination: PaginationClasses;
  PaginationItem: PaginationItemClasses;
  Paper: PaperClasses;
  Popover: PopoverClasses;
  Radio: RadioClasses;
  Rating: RatingClasses;
  Select: SelectClasses;
  Skeleton: SkeletonClasses;
  Slider: SliderClasses;
  Snackbar: SnackbarClasses;
  SnackbarContent: SnackbarContentClasses;
  Stack: StackClasses;
  Step: StepClasses;
  StepButton: StepButtonClasses;
  StepConnector: StepConnectorClasses;
  StepContent: StepContentClasses;
  StepIcon: StepIconClasses;
  StepLabel: StepLabelClasses;
  Stepper: StepperClasses;
  SvgIcon: SvgIconClasses;
  SwipeableDrawer: SwipeableDrawerClasses;
  Switch: SwitchClasses;
  Tab: TabClasses;
  Table: TableClasses;
  TableBody: TableBodyClasses;
  TableCell: TableCellClasses;
  TableContainer: TableContainerClasses;
  TableFooter: TableFooterClasses;
  TableHead: TableHeadClasses;
  TablePagination: TablePaginationClasses;
  TableRow: TableRowClasses;
  TableSortLabel: TableSortLabelClasses;
  Tabs: TabsClasses;
  TabScrollButton: TabScrollButtonClasses;
  TextField: TextFieldClasses;
  ToggleButton: ToggleButtonClasses;
  ToggleButtonGroup: ToggleButtonGroupClasses;
  Toolbar: ToolbarClasses;
  Tooltip: TooltipClasses;
  Typography: TypographyClasses;
}
