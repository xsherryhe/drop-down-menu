export default function dropDownMenu(menu) {
  menu.classList.add('dropdown-menu');
  const [menuHeading, ...menuItems] = menu.children;
  menuHeading.classList.add('dropdown-menu-heading');

  const menuItemsContainer = document.createElement('div');
  menuItemsContainer.classList.add('dropdown-menu-item-container');
  menuItemsContainer.append(...menuItems);
  menu.append(menuItemsContainer);

  menuItems.forEach((menuItem) => {
    menuItem.classList.add('dropdown-menu-item');
  });

  function slideUpMenuItems(targetMenu) {
    targetMenu
      .querySelectorAll('.dropdown-menu-item:not(.dropped-down)')
      .forEach((menuItem) => {
        menuItem.setAttribute(
          'style',
          `transform: translateY(-${menuItemsContainer.offsetHeight}px);`
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
  menuHeading.addEventListener('click', toggleMenuItems);
}
