document.addEventListener('DOMContentLoaded', function() {
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sampleItems = document.querySelectorAll('.sample-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // ボタンのアクティブ切り替え
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            sampleItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === itemCategory) {
                    // 表示処理
                    if (item.classList.contains('hidden')) {
                        item.classList.remove('hidden');
                        // 少し遅らせてフェードイン
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    }
                } else {
                    // 非表示処理
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    
                    // アニメーション後にdisplay:none
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if(target){
                const headerOffset = 100; // 固定ヘッダー + Marquee分
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});