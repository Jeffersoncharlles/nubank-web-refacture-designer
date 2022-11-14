import styles from './styles.module.scss'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface Props {
  title: string;
  link: string;
}

export const Dropdown = ({ title, link }: Props) => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger />

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item className={styles.content_items}>
            New Window
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
