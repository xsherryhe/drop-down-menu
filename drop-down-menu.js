export default function dropDownMenu(menu) {
  menu.classList.add('dropdown-menu');
  const [menuHeading, ...menuItems] = menu.children;
  menuHeading.classList.add('dropdown-menu-heading');

  menuItems.forEach((menuItem) => {
    menuItem.classList.add('dropdown-menu-item');
  });

  function slideUpMenuItems(targetMenu) {
    targetMenu
      .querySelectorAll('.dropdown-menu-item:not(.dropped-down)')
      .forEach((menuItem, i) => {
        menuItem.setAttribute(
          'style',
          `transform: translateY(-${(i + 1) * 100}%);`
        );
      });
  }
  slideUpMenuItems(menu);

  function slideDownMenuItems(targetMenu) {
    targetMenu
      .querySelectorAll('.dropdown-menu-item.dropped-down')
      .forEach((menuItem) => {
        menuItem.setAttribute('style', 'transform: translateY(0);');
      });
  }

  function toggleMenuItems() {
    menuItems.forEach((menuItem) => {
      menuItem.classList.toggle('dropped-down');
      slideUpMenuItems(menu);
      slideDownMenuItems(menu);
    });
  }
  menu.addEventListener('click', toggleMenuItems);
}
