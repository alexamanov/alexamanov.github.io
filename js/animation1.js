function start(c) {
    let 
        $ = c.getContext('2d'), 
        w = c.width = 400,
        h = c.height = 256,
        opts = {
            amount: 15,
            maxHeight: 50,
            radius: 10,
            distance: 10,
            span: Math.PI,
            speed: Math.PI / 180 * 2
        },
        arr = new Array(opts.amount + 1).fill().map((el, index) => {
            return { 
                a: opts.span / opts.amount * index, 
                x: (opts.distance + opts.radius * 2) * index
            };
        });

        function draw() {
            $.fillStyle = '#1e1e1e';
            $.fillRect(0, 0, 400, 256);
            arr.forEach((el, index) => {

                el.a += opts.speed;

                $.beginPath();
                $.arc(el.x, Math.sin(el.a) * opts.maxHeight + h/2, opts.radius, 0, Math.PI * 2);
                $.closePath();
                $.fillStyle = 'hsl(' + el.a * 30 + ', 50%, 50%)';
                $.fill();
            });

            requestAnimationFrame(draw);

        }

        draw();
}

start(c1);
start(c2);
