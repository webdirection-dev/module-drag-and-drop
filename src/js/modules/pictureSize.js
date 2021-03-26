const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    blocks.forEach(item => {
        item.addEventListener('mouseover', () => {
            showImg(item, -4, '-1.png', 'none');
        });

        item.addEventListener('mouseout', () => {
            showImg(item, -6, '.png', 'block');
        });
    });

    // Техническая
    function showImg (block, slicer, adder, arg) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, slicer) + adder;
        block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
            item.style.display = arg;
        });
    }
};

export default pictureSize;