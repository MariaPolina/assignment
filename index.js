document.addEventListener('DOMContentLoaded', function () {

    //change content for tabs----------------------------------------------------------//
    const tabElements = document.querySelectorAll('.tabs__wrapper > div');

    tabElements.forEach(function (tabElement) {
        tabElement.addEventListener('click', function () {

            tabElements.forEach(function (element) {
                element.classList.remove('active');
            });

            let tabNumber = tabElement.className;

            const tabDataItems = document.querySelectorAll('.tabs-item');
            tabDataItems.forEach(function (item) {
                item.style.display = 'none';
            });

            const tabDataItem = document.getElementById(tabNumber);
            if (tabDataItem) {
                tabDataItem.style.display = 'block';
            }

            tabElement.classList.add('active');
        });
    });
    //-------------------------------------------------------------------------------//

});