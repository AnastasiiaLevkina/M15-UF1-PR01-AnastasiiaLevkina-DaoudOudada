namespace SpriteKind {
    export const CampaignMode = SpriteKind.create()
    export const TowerMode = SpriteKind.create()
    export const Icon = SpriteKind.create()
    export const Asset = SpriteKind.create()
}

//  Player clase to create character 
class Player {
    static hp: number
    private ___hp_is_set: boolean
    private ___hp: number
    get hp(): number {
        return this.___hp_is_set ? this.___hp : Player.hp
    }
    set hp(value: number) {
        this.___hp_is_set = true
        this.___hp = value
    }
    
    static damage: number
    private ___damage_is_set: boolean
    private ___damage: number
    get damage(): number {
        return this.___damage_is_set ? this.___damage : Player.damage
    }
    set damage(value: number) {
        this.___damage_is_set = true
        this.___damage = value
    }
    
    static talent: number
    private ___talent_is_set: boolean
    private ___talent: number
    get talent(): number {
        return this.___talent_is_set ? this.___talent : Player.talent
    }
    set talent(value: number) {
        this.___talent_is_set = true
        this.___talent = value
    }
    
    static luck: number
    private ___luck_is_set: boolean
    private ___luck: number
    get luck(): number {
        return this.___luck_is_set ? this.___luck : Player.luck
    }
    set luck(value: number) {
        this.___luck_is_set = true
        this.___luck = value
    }
    
    static level: number
    private ___level_is_set: boolean
    private ___level: number
    get level(): number {
        return this.___level_is_set ? this.___level : Player.level
    }
    set level(value: number) {
        this.___level_is_set = true
        this.___level = value
    }
    
    static exp: number
    private ___exp_is_set: boolean
    private ___exp: number
    get exp(): number {
        return this.___exp_is_set ? this.___exp : Player.exp
    }
    set exp(value: number) {
        this.___exp_is_set = true
        this.___exp = value
    }
    
    static exp_required: number
    private ___exp_required_is_set: boolean
    private ___exp_required: number
    get exp_required(): number {
        return this.___exp_required_is_set ? this.___exp_required : Player.exp_required
    }
    set exp_required(value: number) {
        this.___exp_required_is_set = true
        this.___exp_required = value
    }
    
    static coins: number
    private ___coins_is_set: boolean
    private ___coins: number
    get coins(): number {
        return this.___coins_is_set ? this.___coins : Player.coins
    }
    set coins(value: number) {
        this.___coins_is_set = true
        this.___coins = value
    }
    
    static points: number
    private ___points_is_set: boolean
    private ___points: number
    get points(): number {
        return this.___points_is_set ? this.___points : Player.points
    }
    set points(value: number) {
        this.___points_is_set = true
        this.___points = value
    }
    
    static attack_delay: number
    private ___attack_delay_is_set: boolean
    private ___attack_delay: number
    get attack_delay(): number {
        return this.___attack_delay_is_set ? this.___attack_delay : Player.attack_delay
    }
    set attack_delay(value: number) {
        this.___attack_delay_is_set = true
        this.___attack_delay = value
    }
    
    public static __initPlayer() {
        Player.hp = 0
        Player.damage = 0
        Player.talent = 0
        Player.luck = 0
        Player.level = 0
        Player.exp = 0
        Player.exp_required = 0
        Player.coins = 0
        Player.points = 0
        Player.attack_delay = 0
    }
    
    constructor(hp: number, dm: number, tl: number, lk: number, lvl: number, exp: number, exp_req: number, cs: number, ps: number, delay: number) {
        this.hp = hp
        this.damage = dm
        this.talent = tl
        this.luck = lk
        this.level = lvl
        this.exp = exp
        this.exp_required = exp_req
        this.coins = cs
        this.points = ps
        this.attack_delay
    }
    
    public recieve_damage(damage: any) {
        this.hp -= damage
    }
    
    public promote_to_next_level() {
        this.level += 1
        this.exp = this.exp - this.exp_required
        this.exp_required *= 1.1
        this.points += 1
    }
    
    public add_char_bonus() {
        this.hp *= 1.5
        this.damage *= 1.3
        this.luck *= 1.2
    }
    
    public remove_char_bonus() {
        
    }
    
}

Player.__initPlayer()

class Enemy {
    static enemy_type: number
    private ___enemy_type_is_set: boolean
    private ___enemy_type: number
    get enemy_type(): number {
        return this.___enemy_type_is_set ? this.___enemy_type : Enemy.enemy_type
    }
    set enemy_type(value: number) {
        this.___enemy_type_is_set = true
        this.___enemy_type = value
    }
    
    static health: number
    private ___health_is_set: boolean
    private ___health: number
    get health(): number {
        return this.___health_is_set ? this.___health : Enemy.health
    }
    set health(value: number) {
        this.___health_is_set = true
        this.___health = value
    }
    
    static damage: number
    private ___damage_is_set: boolean
    private ___damage: number
    get damage(): number {
        return this.___damage_is_set ? this.___damage : Enemy.damage
    }
    set damage(value: number) {
        this.___damage_is_set = true
        this.___damage = value
    }
    
    static speed: number
    private ___speed_is_set: boolean
    private ___speed: number
    get speed(): number {
        return this.___speed_is_set ? this.___speed : Enemy.speed
    }
    set speed(value: number) {
        this.___speed_is_set = true
        this.___speed = value
    }
    
    static pos_x: number
    private ___pos_x_is_set: boolean
    private ___pos_x: number
    get pos_x(): number {
        return this.___pos_x_is_set ? this.___pos_x : Enemy.pos_x
    }
    set pos_x(value: number) {
        this.___pos_x_is_set = true
        this.___pos_x = value
    }
    
    static pos_y: number
    private ___pos_y_is_set: boolean
    private ___pos_y: number
    get pos_y(): number {
        return this.___pos_y_is_set ? this.___pos_y : Enemy.pos_y
    }
    set pos_y(value: number) {
        this.___pos_y_is_set = true
        this.___pos_y = value
    }
    
    static enemy_sprite: Sprite
    private ___enemy_sprite_is_set: boolean
    private ___enemy_sprite: Sprite
    get enemy_sprite(): Sprite {
        return this.___enemy_sprite_is_set ? this.___enemy_sprite : Enemy.enemy_sprite
    }
    set enemy_sprite(value: Sprite) {
        this.___enemy_sprite_is_set = true
        this.___enemy_sprite = value
    }
    
    static facing_right: boolean
    private ___facing_right_is_set: boolean
    private ___facing_right: boolean
    get facing_right(): boolean {
        return this.___facing_right_is_set ? this.___facing_right : Enemy.facing_right
    }
    set facing_right(value: boolean) {
        this.___facing_right_is_set = true
        this.___facing_right = value
    }
    
    static delay: number
    private ___delay_is_set: boolean
    private ___delay: number
    get delay(): number {
        return this.___delay_is_set ? this.___delay : Enemy.delay
    }
    set delay(value: number) {
        this.___delay_is_set = true
        this.___delay = value
    }
    
    public static __initEnemy() {
        Enemy.enemy_type = 0
        Enemy.health = 0
        Enemy.damage = 0
        Enemy.speed = 0
        Enemy.enemy_sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
        Enemy.pos_x = 0
        Enemy.pos_y = 0
        Enemy.delay = 0
        Enemy.facing_right = false
    }
    
    constructor(t: number, hp: number, dg: number, sp: number, x: number, y: number) {
        this.enemy_type = t
        this.health = hp
        this.damage = dg
        this.speed = sp
        this.pos_x = x
        this.pos_y = y
    }
    
    public create_sprite(sprite: Sprite) {
        this.enemy_sprite = sprite
    }
    
    public set_sprite(sprite: Sprite) {
        this.enemy_sprite = sprite
    }
    
    public start_moving(player_x: number) {
        if (this.enemy_sprite.x > player_x) {
            //  The enemy spawns at the right of the player
            if (this.facing_right) {
                this.enemy_sprite.image.flipX()
                this.facing_right = false
            }
            
            this.enemy_sprite.setVelocity(this.speed * -1, 0)
        } else {
            //  The enemy spawns at the left of the player
            this.enemy_sprite.image.flipX()
            this.facing_right = true
            this.enemy_sprite.setVelocity(this.speed, 0)
        }
        
    }
    
    public recieve_damage(damage: any) {
        this.health -= damage
    }
    
    public die() {
        sprites.destroy(this.enemy_sprite)
    }
    
}

Enemy.__initEnemy()

class Enemy_Type1 extends Enemy {
    static min_distance: number
    private ___min_distance_is_set: boolean
    private ___min_distance: number
    get min_distance(): number {
        return this.___min_distance_is_set ? this.___min_distance : Enemy_Type1.min_distance
    }
    set min_distance(value: number) {
        this.___min_distance_is_set = true
        this.___min_distance = value
    }
    
    public static __initEnemy_Type1() {
        //  Enemy that, approaching the player, stops moving and starts attacking
        Enemy_Type1.min_distance = 0
    }
    
    constructor(t: number, hp: number, dg: number, sp: number, x: number, y: number, dist: number) {
        super(t, hp, dg, sp, x, y)
        this.min_distance = dist
    }
    
}

Enemy_Type1.__initEnemy_Type1()

class Enemy_Type2 extends Enemy {
    static hit_distance: number
    private ___hit_distance_is_set: boolean
    private ___hit_distance: number
    get hit_distance(): number {
        return this.___hit_distance_is_set ? this.___hit_distance : Enemy_Type2.hit_distance
    }
    set hit_distance(value: number) {
        this.___hit_distance_is_set = true
        this.___hit_distance = value
    }
    
    public static __initEnemy_Type2() {
        //  Enemy that passes the player without stopping and dealing damage when approaching
        Enemy_Type2.hit_distance = 0
    }
    
    constructor(t: number, hp: number, dg: number, sp: number, x: number, y: number, dist: number) {
        super(t, hp, dg, sp, x, y)
        this.hit_distance = dist
    }
    
}

Enemy_Type2.__initEnemy_Type2()

class Level {
    static level_number: number
    private ___level_number_is_set: boolean
    private ___level_number: number
    get level_number(): number {
        return this.___level_number_is_set ? this.___level_number : Level.level_number
    }
    set level_number(value: number) {
        this.___level_number_is_set = true
        this.___level_number = value
    }
    
    static enemy_appearance_order: number[][]
    private ___enemy_appearance_order_is_set: boolean
    private ___enemy_appearance_order: number[][]
    get enemy_appearance_order(): number[][] {
        return this.___enemy_appearance_order_is_set ? this.___enemy_appearance_order : Level.enemy_appearance_order
    }
    set enemy_appearance_order(value: number[][]) {
        this.___enemy_appearance_order_is_set = true
        this.___enemy_appearance_order = value
    }
    
    static level_passed: boolean
    private ___level_passed_is_set: boolean
    private ___level_passed: boolean
    get level_passed(): boolean {
        return this.___level_passed_is_set ? this.___level_passed : Level.level_passed
    }
    set level_passed(value: boolean) {
        this.___level_passed_is_set = true
        this.___level_passed = value
    }
    
    static level_opened: boolean
    private ___level_opened_is_set: boolean
    private ___level_opened: boolean
    get level_opened(): boolean {
        return this.___level_opened_is_set ? this.___level_opened : Level.level_opened
    }
    set level_opened(value: boolean) {
        this.___level_opened_is_set = true
        this.___level_opened = value
    }
    
    static stars: number
    private ___stars_is_set: boolean
    private ___stars: number
    get stars(): number {
        return this.___stars_is_set ? this.___stars : Level.stars
    }
    set stars(value: number) {
        this.___stars_is_set = true
        this.___stars = value
    }
    
    static background_img: string
    private ___background_img_is_set: boolean
    private ___background_img: string
    get background_img(): string {
        return this.___background_img_is_set ? this.___background_img : Level.background_img
    }
    set background_img(value: string) {
        this.___background_img_is_set = true
        this.___background_img = value
    }
    
    static level_music: string
    private ___level_music_is_set: boolean
    private ___level_music: string
    get level_music(): string {
        return this.___level_music_is_set ? this.___level_music : Level.level_music
    }
    set level_music(value: string) {
        this.___level_music_is_set = true
        this.___level_music = value
    }
    
    static pos_on_map: number[]
    private ___pos_on_map_is_set: boolean
    private ___pos_on_map: number[]
    get pos_on_map(): number[] {
        return this.___pos_on_map_is_set ? this.___pos_on_map : Level.pos_on_map
    }
    set pos_on_map(value: number[]) {
        this.___pos_on_map_is_set = true
        this.___pos_on_map = value
    }
    
    static star_light: string
    private ___star_light_is_set: boolean
    private ___star_light: string
    get star_light(): string {
        return this.___star_light_is_set ? this.___star_light : Level.star_light
    }
    set star_light(value: string) {
        this.___star_light_is_set = true
        this.___star_light = value
    }
    
    public static __initLevel() {
        Level.level_number = 0
        //  Enemies of the level are stored in an array of pairs enemyId-delayAfterPrevious
        Level.enemy_appearance_order = [[]]
        Level.level_passed = false
        Level.level_opened = false
        Level.stars = 0
        Level.background_img = ""
        Level.level_music = ""
        Level.star_light = ""
        Level.pos_on_map = []
    }
    
    constructor(lvl_num: number, enemies: number[][], lvl_passed: boolean, lvl_opened: boolean, stars: number, bg: string, mus: string, pos: number[], light: string) {
        this.level_number = lvl_num
        this.enemy_appearance_order = enemies
        this.level_passed = lvl_passed
        this.level_opened = lvl_opened
        this.stars = stars
        this.background_img = bg
        this.level_music = mus
        this.pos_on_map = pos
        this.star_light = light
    }
    
}

Level.__initLevel()

// Controls
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    if (on_main_screen == true) {
        close_main_screen()
        open_choose_mode()
    } else if (on_settings_menu) {
        on_dev_mode = !on_dev_mode
        create_dev_mode_switch()
    } else if (on_choose_mode == true) {
        close_choose_mode()
        if (choose_campaign_mode) {
            open_level_map()
        } else {
            open_tower_mode()
        }
        
    } else if (on_level_map_screen) {
        close_level_map()
        open_player_stats_menu()
    } else if (player_stats_menu_opened == true) {
        if (continue_button_selected) {
            close_player_stats_menu()
            play_level(campaign_levels[selected_level])
        }
        
    }
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    if (on_main_screen == true) {
        close_main_screen()
        open_settings_menu()
    } else if (on_settings_menu == true) {
        close_settings_menu()
        open_main_screen()
    } else if (on_choose_mode == true) {
        close_choose_mode()
        open_main_screen()
    } else if (on_level_map_screen == true) {
        close_level_map()
        open_choose_mode()
    } else if (player_stats_menu_opened == true) {
        close_player_stats_menu()
        if (choose_campaign_mode) {
            open_level_map()
        } else {
            open_choose_mode()
        }
        
    }
    
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    
    
    if (on_choose_mode) {
        set_cursor_facing_right()
    } else if (playing_level) {
        attack_right()
    } else if (on_level_map_screen == true) {
        select_next_level()
    } else if (player_stats_menu_opened) {
        change_selected_character()
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    
    if (on_choose_mode) {
        set_cursor_facing_left()
    } else if (playing_level) {
        attack_left()
    } else if (on_level_map_screen == true) {
        select_previuous_level()
    } else if (player_stats_menu_opened) {
        change_selected_character()
    }
    
})
function shoot_left() {
    let projectile = sprites.createProjectileFromSprite(img`
        . . 4 4 . .
        . 4 4 4 4 .
        4 4 4 4 4 4
        . 4 4 4 4 .
        . . 4 4 . .
    `, player_sprite, -100, 0)
}

//  Velocidad negativa en X para ir a la izquierda
function shoot_right() {
    let projectile = sprites.createProjectileFromSprite(img`
        . . 4 4 . .
        . 4 4 4 4 .
        4 4 4 4 4 4
        . 4 4 4 4 .
        . . 4 4 . .
    `, player_sprite, 100, 0)
}

//  Velocidad positiva en X para ir a la derecha
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    if (on_level_map_screen == true) {
        select_next_level()
    }
    
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    if (on_level_map_screen == true) {
        select_previuous_level()
    }
    
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
function attack_left() {
    
    if (player_facing_right) {
        player_sprite.image.flipX()
        player_facing_right = false
    }
    
    shoot_left()
}

//  Play attack animation
function attack_right() {
    
    if (!player_facing_right) {
        player_sprite.image.flipX()
        player_facing_right = true
    }
    
    shoot_right()
}

//  Play attack animation
// Screens
function open_main_screen() {
    
    scene.setBackgroundImage(assets.image`
        game_logo_bg
    `)
    music.play(music.createSong(hex`
            00780004080200
        `), music.PlaybackMode.InBackground)
    game_title()
    bottom_text()
    settings_icon()
    on_main_screen = true
}

function close_main_screen() {
    
    music.stopAllSounds()
    sprites.destroy(text_sprite)
    sprites.destroy(title_sprite)
    destroy_settings_icon()
    sprites.destroy(letter_b_exit_icon)
    on_main_screen = false
}

function open_choose_mode() {
    
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
                7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
                7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
                6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
                6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
                6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
                6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
                6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
                66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
                66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
                66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
                66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
                66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
                6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
                6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
                6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
                bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
                bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
                bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
                bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
                bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
                bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
                bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
                bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
                bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
                bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
                b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
                b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
                b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
                b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
                dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
                9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
                9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
                9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
                9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
                99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
                99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
                9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
                9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
                999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
                d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
                dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
                dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
                9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
                9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
                9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
                9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
                9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
                9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
                ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
                dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
                dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
                dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
                dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
                d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
                d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
                d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
                999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
                999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
                999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
                999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
                999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
                999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
                9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
                d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
                ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
                dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
                ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
                ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
                ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
                dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
                dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
                dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
                dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
                dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
                ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
                dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
                ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
                dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
                ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
    mode_a = sprites.create(img`
            . . . . . . c c . . . . . . . .
                    . . . . . . c c c . . . . . . .
                    . . . . . c c . c . . . . . . .
                    . . . . . c . . . c . . . . . .
                    . . . . . c . . . c . . . . . .
                    . . . . . c . . . . c . . . . .
                    . . . . c . . . . . c . . . . .
                    . . . . c . . . . . . c . . . .
                    . . . c . . . . . . . c . . . .
                    . . . c . . . . . . . c c . . .
                    . . . c c c c c c c c c c . . .
                    . . c . . . . . . . . . c . . .
                    . . c . . . . . . . . . . c . .
                    . c . . . . . . . . . . . c c .
                    . c . . . . . . . . . . . . c .
                    c . . . . . . . . . . . . . c c
        `, SpriteKind.CampaignMode)
    mode_a.setPosition(20, 62)
    mode_b = sprites.create(img`
            . . . . 3 3 3 3 3 . . . . . . .
                    . . . . 3 . . . 3 3 . . . . . .
                    . . . . 3 . . . . 3 3 . . . . .
                    . . . . 3 . . . . . 3 . . . . .
                    . . . . 3 . . . . . 3 . . . . .
                    . . . . 3 . . . . 3 3 . . . . .
                    . . . . 3 3 3 3 3 3 . . . . . .
                    . . . . 3 3 . . 3 3 3 3 . . . .
                    . . . . 3 . . . . . . 3 3 . . .
                    . . . . 3 . . . . . . . 3 . . .
                    . . . . 3 . . . . . . . . 3 . .
                    . . . . 3 . . . . . . . . 3 . .
                    . . . . 3 . . . . . . . . 3 . .
                    . . . . 3 . . . . . . . . 3 . .
                    . . . . 3 . . . . . . . . 3 . .
                    . . . . 3 3 3 3 3 3 3 3 3 . . .
        `, SpriteKind.TowerMode)
    mode_b.setPosition(119, 59)
    cursor = sprites.create(img`
            . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . f f . . . . . . . . . . . .
                    . . f 1 f f f . . . . . . . . .
                    . . f 1 1 1 1 f f . . . . . . .
                    . . f f 1 1 1 1 1 f f . . . . .
                    . . . f 1 1 1 1 1 1 1 f f . . .
                    . . . f 1 1 1 1 1 1 f f . . . .
                    . . . f 1 1 1 1 1 f f f . . . .
                    . . . f 1 1 f 1 1 1 1 f f . . .
                    . . . f 1 1 f f 1 1 1 f f . . .
                    . . . f f f . . f f f f . . . .
                    . . . f f . . . . f f . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
        `, SpriteKind.Player)
    cursor.setPosition(76, 63)
    if (choose_tower_mode) {
        cursor.image.flipX()
    }
    
    on_choose_mode = true
    exit_icon()
}

function close_choose_mode() {
    
    sprites.destroy(mode_a)
    sprites.destroy(mode_b)
    sprites.destroy(cursor)
    destroy_exit_icon()
    on_choose_mode = false
}

function open_level_map() {
    let level_sprite: Sprite;
    let lvl_num: TextSprite;
    
    scene.setBackgroundImage(assets.image`
            myImage2
        `)
    let level_num = 0
    for (let lvl of campaign_levels) {
        level_num += 1
        level_sprite = sprites.create(assets.image`
                    level_square_sprite
                `, SpriteKind.Asset)
        scaling.scaleByPercent(level_sprite, -70, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        level_sprite.setPosition(lvl.pos_on_map[0], lvl.pos_on_map[1])
        lvl_num = textsprite.create("" + level_num)
        lvl_num.setPosition(lvl.pos_on_map[0] - 1, lvl.pos_on_map[1] - 1)
        //  need a bit of adjusting
        if (lvl.level_passed) {
            lvl_num.setOutline(1, 4)
        } else if (lvl.level_opened) {
            lvl_num.setOutline(1, 3)
        }
        
    }
    create_level_selector()
    on_level_map_screen = true
}

function close_level_map() {
    
    sprites.destroyAllSpritesOfKind(SpriteKind.Asset)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    on_level_map_screen = false
}

function open_settings_menu() {
    
    scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b888886888888588888888888888b8888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b888886888888588888888888888b8888888888888
            8888888888888888888888888888888888688888888888b88888888888888888888888888888888888888888888888888888888888888888888888b888888688888588888888888888b8888888888888
            888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888b888888888888888888888888888b888888688888588888888888888b8888888888888
            888888888888888888888888888888888868888888888b888888888888888888888888888888888888888888888888888888888888888888888888b888888888888588888888888888b8888888888888
            88888888888888888888888888888888886888888888b8888888888888888888888888888888888888888888888b88888888888888888888888888b888888868888588888888888888b8888888888888
            8888888888888888888888888888888888688888888b88888888888888888888888888888888888888888888888888888888888888888888888888b888888868888588888888888888b8888888888888
            88888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888b8888888888888888888888888b888888868888588888888888888b8888888888888
            888888888888888888888888888888888688888888b88888888888888888888888888888888888888888888888888b888888888888888888888888b888888886888588888888888888b8888888888888
            88888888888888888888888888888888868888888b888888888888888888888888888888888888888888888888888b888888888888888888888888b888888886888588888888888888b8888888888888
            8888888888888888888888888888888868888888b88888888888888888888888888888888888888888888888888888b88888888888888888888888b888888886888588888888888888b8888888888888
            88888888888888888888888888888888688888bb8888888888888888888888888888888888888888888888888888888b8888888888888888888888b88888888868858888888888888858888888888888
            8888888888888888888888888888888868888bb88888888888888888888888888888888888888888888888888888888b8888888888888888888888b888888888688588888888888888b8888888888888
            888888888888888888888888888888886888bb8888888888888888888888888888888888888888888888888888888888b888888888888888888888b888888888688588888888888888b8888888888888
            88888888888888888888888888888888688b888888888888888888888888888888888888888888888888888888888888bb88888888888888888888b888888888668588888888888888b8888888888888
            8888888888888888888888888888888688b88888888888888888888888888888888888888888888888888888888888888bb8888888888888888888b88888888886858888888888888858888888888888
            88888888888888888888888888888886bb8888888888888888888888888888888888888888888888888888888888888888b8888888888888888888b888888888868b88888888888888b8888888888888
            88888888888888888888888888888886b888888888888888888888888888888888888888888888888888888888888886888b888888888888888888b888888888855b55888888888888b8888888888888
            8888888888888888888888888888886b88888888888888888888888888888888888888888888888888888888888888868888b88888888888888888b88888888555b5b555888888888858888888888888
            8888888888888888888888888888bb68888888888888888888888888888888888888888888888888888888888888888888888b888888888888888858888b88bbbb555bbbbb8b888888b8888888888888
            888888888888888888888888888bb85b8888888888888888888888888888888888888888888888888888888888888888688888b888888888888888b88885555bbb5555bbb55588888858888888888888
            88888888888888888888888888b8865588888888888888888888888888888888888888888888888888888888888888886888888bb8888888888888b8888b555555555555555b88888858888888888888
            888888888888888888888888bb555555b88888888888888888888888888888888888888888888888888888888888888888888888bb888888888888b88888bbb8b86688b88bb888888858888888888888
            88888888888888888888888bb8b55555555b888888888888888888888888888888888888888888888888888888888888868888888bb88888888888588888b5855586855585b888888858888888888888
            888888888888888888888bb88885555555b888888888888888888888888888888888888888888888888888888888888886888888888b8888888888b88888858b5b868b5b858888888858888888888888
            88888888888888888888b888888b55555b88888888888888888888888888888888888888888888888888888888888888886888888888bb88888888b88888858858868858858888888858888888888888
            888888888888888888bb8888888b55555b888888888888888888888888888888888888888888888888888888888888888868888888888bb8888888588888858858866858858888888858888888888888
            8888888888888888bb888888888555b55588888888888888888888888888888888888888888888888888888888888888886888888888888bb88888b88888858858886858858888888858888888888888
            888888888888888bb888888888855888558888888888888888888888888888888888888888888888888888888888888888868888888888888bb888588888858858886858858888888858888888888888
            8888888888888bb8888888888866888888888888888888888888888888888888888888888888888888888888888888888886888888888888888bb8588888858858886658858888888858888888888888
            8888888888bbb88888888888886888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888b5b8888858858886658858888888858888888888888
            888888888b8888888888888888688888888888888888888888888888888888888888888888888888888888888888888888886688888888888888885bbb88858858888658858888888858888888888888
            88888888bb888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888588bbbb58858888658858888888858888888888888
            888888bb88888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888866888888888888888588888b5bb58888658858888888858888888888888
            8888bb8888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888886888888888888888588888858b5bbb8658858888888858888888888888
            bbbb8888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888885888888588588bbb5b858888888858888888888888
            888888888888888888888886688888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888858888885b858888856b5bbb8888858888888888888
            8888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888588888855b5888885b5588bbbbb858888888888888
            88888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888885888888b55555555555b888888885bbbbbbb888888
            88888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888885888888855555555555888888888b88888bbbbbbbb
            8888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888588888888b55bbb55b6888888855b5588888888888
            8888888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888588888888888555888688888555b5b555888888888
            8888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888886688888888588888888888b5b88866b88bbbb555bbbbb8b88888
            8888888888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888588888888888bbb888665555bbb5555bbb55588888
            888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866688888858888888888855588886b555555555555555b88888
            8888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866688888588888888888b5b888866bbb8b88888b88bb888888
            8888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886668888588888888888858888886b5855588855585b888888
            8888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666888b88888888888858888886658b5b888b5b858888888
            8888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886655b55888888888858888886658858888858858888888
            888888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555b5b5558888888858888888658858888858858888888
            88888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88bbbb555bbbbb8b888858888888658858888858858888888
            888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555bbb5555bbb555888858888888858858888858858888888
            88888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b555555555555555b888858888888856858888858858888888
            888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbb8b88886b68bb88888b8888888856658888858858888888
            888888888886688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b5855588855565b88888b8888888858658888858858888888
            888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858b5b888b5b65688888b8888888858658888858858888888
            88888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885885888885885666888b8888888858858888858858888888
            8888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588586666888888888858856888858858888888
            8888886688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588886666888888858856688858858888888
            888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858858888858858888886666888885b858688858b58888888
            8866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888666666855b5866885b558888888
            66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885885888885885888888888886666b55555555555b8888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888865555555555588888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888b55bbb55b888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888555868888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888b5b866888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888bbb886688888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885b858888858b588888888888888888888555888868888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855b5888885b5588888888888888888888b5b888886688888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b55555555555b88888888888888888888858888888668888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555888888888888888888888858888888866888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b55bbb55b8888888888888888888888858888888888668
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888888888888888888858888888888866
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b5b8888888888888888888888888858888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbb8888888888888888888888888858888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888888888888888888858888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b5b88888888888888888888888888b8888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888
            8888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888
            8888886668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666668888888
            8888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666688888888
            8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666688888888
            8888888888888888888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666688888888
            8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688688888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888885888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888885888888
            8888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888855588888
            8888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855588888
            8888858888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555588
            8888888888888868888888888888888558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555555888
            8888888888888858888888888888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888
            8888888888885555588888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888558558888
            8888888888888555888888888888885555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588858888
            8888888888888585888888888888888585888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
            8888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888888888888888888888
            8888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888888888888888888888
            8888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555555555888888588888888888888
            8888888888888888888888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555558888888588888888888888
            8888888886888888888888555888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888885558888888888888
            8888888885888888888555555555888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885585588888885558888888888888
            8888888555558888888855555558888888888888888888885558888888888888888888888888888888888888888888888888888888888888888888888888888888885888588888855555888888888888
            8888888855588888888885555588888888888888888888885558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555888888888
            8888888858588888888885585588888888888888888885555555558888888888888888888888888888888888888888888888888888888888888888888885888888888888888885555555558888888888
            8888888888888858888885888588888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888855588888888888888888855555888888888888
            8888888888888555888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888555855588888888888
            8888888888855555558888888888888888888888888888855855888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888558885588885888888
            8888888888885555588888888888885888888888888888858885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888588855588888
        `)
    exit_icon()
    create_dev_mode_switch()
    on_settings_menu = true
}

function close_settings_menu() {
    
    destroy_exit_icon()
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.Asset)
    on_settings_menu = false
}

function open_tower_mode() {
    scene.setBackgroundImage(img`
        fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
            fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
            fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
            ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
            fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
            fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
            fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
            fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
            fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
            fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
            ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
            fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
            fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
            ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
            fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
            ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
            ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
            fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
            fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
            cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
            ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
            ffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
            fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
            fffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
            ffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
            fffccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
            ffdcbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
            ffccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
            ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
            ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
            fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
            fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
            ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
            ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
            dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
            dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
            dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
            dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
            dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
            dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
            ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
            ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
            ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
            dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
            dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
            dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
            ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
            ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
            ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
            ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
            ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
            ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
            dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
            dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
            bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
            bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
            bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
            bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
            bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
            bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
            ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
            dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
            ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
            ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
            dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
            ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
            bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
            dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
            dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
            ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
            dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
            bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
            ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
            dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
            dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
            bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
            dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
            dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
            bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
            cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
            ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
            ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
            ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
            cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
            cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
            cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
            ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
            cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
            ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
            cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
            cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
            ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
            cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
            fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
            fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
            fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
            ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
            fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
    `)
    let level_sprite = sprites.create(assets.image`
            knight_sprite
        `, SpriteKind.Player)
    open_player_stats_menu()
}

function close_tower_mode() {
    
}

function play_level(level: Level) {
    
    if (level.level_number == 1) {
        play_cutscene_1()
    }
    
    scene.setBackgroundImage(assets.image`
        moon
    `)
    create_player()
    player_sprite.setPosition(75, 100)
    let delay = 0
    for (let en of level.enemy_appearance_order) {
        delay = delay + en[1]
        timer.after(delay, function on_after2() {
            let enemy_id = en[0]
            let enemy_to_spawn = enemies_collection[enemy_id - 1]
            spawn_enemy(enemy_to_spawn)
            launch_enemy_attack(enemy_to_spawn)
        })
    }
    //  play idle animation for player
    playing_level = true
}

function level_completed() {
    
}

// UI components
function create_stats_menu_sprites() {
    
    right_arrow = sprites.create(assets.image`
            right_select_arrow
        `, SpriteKind.Asset)
    scaling.scaleByPercent(right_arrow, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    right_arrow.setPosition(62, 52)
    right_arrow.z = 6
    left_arrow = sprites.create(assets.image`
            left_select_arrow
        `, SpriteKind.Asset)
    scaling.scaleByPercent(left_arrow, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    left_arrow.setPosition(13, 52)
    left_arrow.z = 6
    continue_button = sprites.create(assets.image`
            continue_button
        `, SpriteKind.Asset)
    scaling.scaleByPercent(continue_button, 40, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    continue_button.setPosition(120, 90)
    continue_button.z = 6
    let continue_text = textsprite.create("CONTINUE")
    continue_text.setPosition(120, 90)
    continue_text.z = 6
}

function create_dev_mode_switch() {
    
    let text = textsprite.create("DEV Mode")
    text.setPosition(75, 20)
    if (on_dev_mode) {
        dev_mode_switch_sprite = sprites.create(assets.image`
                switch_mode_on
        `, SpriteKind.Asset)
    } else {
        dev_mode_switch_sprite = sprites.create(assets.image`
                switch_mode_off
        `, SpriteKind.Asset)
    }
    
    dev_mode_switch_sprite.setPosition(75, 50)
}

function exit_icon() {
    
    exit_sprite = sprites.create(img`
            ..................
                    ..................
                    ....99999999999...
                    ....99666666666...
                    ....96666666666...
                    ............666...
                    .....3......666...
                    ....33......666...
                    ...33333333.666...
                    ..334444444.666...
                    ...44444444.666...
                    ....44......666...
                    .....4......666...
                    ............666...
                    ....66666666666...
                    ....66666666666...
                    ....66666666666...
                    ..................
        `, SpriteKind.Icon)
    exit_sprite.setPosition(11, 105)
    letter_b_exit_icon = textsprite.create("B")
    letter_b_exit_icon.setPosition(11, 105)
    letter_b_exit_icon.setMaxFontHeight(8)
    letter_b_exit_icon.setOutline(1, 15)
    exit_sprite.z = 5
    letter_b_exit_icon.z = 6
}

function settings_icon() {
    
    settings_sprite = sprites.create(img`
                . . . . . . . b b . . . . . . .
                        . . . . . . b d d b . . . . . .
                        . . . . . b d 5 5 d b . . . . .
                        . . . . b b 5 5 5 5 b b . . . .
                        . . . . b 5 5 5 5 5 5 b . . . .
                        b b b b b 5 5 5 5 1 1 d b b b b
                        b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b
                        b d d 5 5 5 5 5 5 1 1 1 5 d d b
                        . b d d 5 5 5 5 5 5 5 5 d d b .
                        . . b b 5 5 5 5 5 5 5 5 b b . .
                        . . c b 5 5 5 5 5 5 5 5 b c . .
                        . . c 5 5 5 5 d d 5 5 5 5 c . .
                        . . c 5 5 d b b b b d 5 5 c . .
                        . . c 5 d b c c c c b d 5 c . .
                        . . c c c c . . . . c c c c . .
                        . . . . . . . . . . . . . . . .
        `, SpriteKind.Icon)
    settings_sprite.setPosition(141, 12)
    letter_b_settings_icon = textsprite.create("B")
    letter_b_settings_icon.setPosition(141, 11)
    letter_b_settings_icon.setMaxFontHeight(8)
    letter_b_settings_icon.setOutline(1, 15)
}

function game_title() {
    
    title_sprite = textsprite.create("Terror Tower")
    title_sprite.setMaxFontHeight(12)
    title_sprite.setOutline(1, 15)
    title_sprite.setPosition(82, 43)
}

function bottom_text() {
    
    text_sprite = textsprite.create("Press A to start the game")
    text_sprite.setOutline(0.2, 1)
    text_sprite.setPosition(80, 110)
}

function destroy_exit_icon() {
    sprites.destroy(exit_sprite)
    sprites.destroy(letter_b_exit_icon)
}

function destroy_settings_icon() {
    sprites.destroy(settings_sprite)
    sprites.destroy(letter_b_settings_icon)
}

function create_level_selector() {
    
    level_selector = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 . . . . . . . . . . . 3 3
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        `, SpriteKind.Asset)
    let selector_pos = campaign_levels[selected_level].pos_on_map
    level_selector.setPosition(selector_pos[0], selector_pos[1])
}

function open_player_stats_menu() {
    
    
    
    // Containers
    let stats_main_container_sprite = sprites.create(img`
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.Asset)
    scaling.scaleByPercent(stats_main_container_sprite, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    stats_main_container_sprite.z = 0
    let stats_header_sprite = sprites.create(img`
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.Asset)
    scaling.scaleByPixels(stats_header_sprite, 24, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    stats_header_sprite.setPosition(80, 20)
    stats_header_sprite.z = 2
    let stats_player_container_sprite = sprites.create(img`
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eee4444444444444444444444444444444444444444444444444eee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.Asset)
    stats_player_container_sprite.z = 1
    stats_player_container_sprite.setPosition(37, 50)
    scaling.scaleByPercent(stats_player_container_sprite, -10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    //  Buttons
    create_stats_menu_sprites()
    //  Create_player
    create_player()
    player_sprite.setPosition(37, 52)
    //  play idle animation
    //  Text
    let char_name_text = textsprite.create(character_name)
    char_name_text.setPosition(40, 20)
    char_name_text.z = 3
    let player_level_text = textsprite.create("LVL " + player.level)
    player_level_text.setPosition(120, 20)
    player_level_text.z = 3
    let hp_text = textsprite.create("HP")
    hp_text.setPosition(80, 40)
    hp_text.z = 3
    let damage_text = textsprite.create("DM")
    damage_text.setPosition(80, 50)
    damage_text.z = 3
    let luck_text = textsprite.create("LUCK")
    luck_text.setPosition(80, 60)
    luck_text.z = 3
    let player_hp_text = textsprite.create("" + player.hp)
    player_hp_text.setPosition(125, 40)
    player_hp_text.z = 3
    let player_power_text = textsprite.create("" + player.damage)
    player_power_text.setPosition(125, 50)
    player_power_text.z = 3
    luck_text = textsprite.create("" + player.luck)
    luck_text.setPosition(125, 60)
    luck_text.z = 3
    player_stats_menu_opened = true
}

function close_player_stats_menu() {
    
    sprites.destroyAllSpritesOfKind(SpriteKind.Asset)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroy(player_sprite)
    player_stats_menu_opened = false
}

//  Functions
function select_right_arrow() {
    
    right_arrow.setImage(assets.image`
            right_arrow_selected
            `)
    right_arrow_selected = true
}

function deselect_right_arrow() {
    
    right_arrow.setImage(assets.image`
            right_select_arrow
                `)
    right_arrow_selected = false
}

function select_left_arrow() {
    
    left_arrow.setImage(assets.image`
            right_arrow_selected
            `)
    left_arrow_selected = true
}

function deselect_left_arrow() {
    
    left_arrow.setImage(assets.image`
            right_select_arrow
                `)
    left_arrow_selected = true
}

function select_continue_button() {
    
    continue_button.setImage(assets.image`
            right_select_arrow
                    `)
    continue_button_selected = true
}

function deselect_continue_button() {
    
    continue_button.setImage(assets.image`
            right_select_arrow
                    `)
    continue_button_selected = false
}

function confirm_before_proceeding(msg: string) {
    game.splash(msg)
}

function set_cursor_facing_left() {
    
    if (!choose_campaign_mode) {
        cursor.image.flipX()
        choose_campaign_mode = true
        choose_tower_mode = false
    }
    
}

function set_cursor_facing_right() {
    
    if (!choose_tower_mode) {
        cursor.image.flipX()
        choose_tower_mode = true
        choose_campaign_mode = false
    }
    
}

function set_knight_base_stats(): Player {
    let knight_data = new Player(125, 20, 5, 5, 1, 0, 100, 0, 0, 200)
    //  health
    //  damage
    //  talent
    //  luck
    //  level
    //  exp
    //  exp required
    //  coins
    //  points
    //  attack delay
    return knight_data
}

function set_mage_base_stats(): Player {
    let mage_data = new Player(65, 15, 10, 5, 1, 0, 100, 0, 0, 150)
    //  health
    //  damage
    //  talent
    //  luck
    //  level
    //  exp
    //  exp required
    //  coins
    //  points
    //  attack delay
    return mage_data
}

function set_assassin_base_stats(): Player {
    let assassin_data = new Player(75, 20, 7, 10, 1, 0, 100, 0, 0, 50)
    //  health
    //  damage
    //  talent
    //  luck
    //  level
    //  exp
    //  exp required
    //  coins
    //  points
    //  attack delay
    return assassin_data
}

function select_next_level() {
    let new_pos: number[];
    
    if (selected_level < campaign_levels.length - 1) {
        if (campaign_levels[selected_level + 1].level_opened || on_dev_mode) {
            selected_level += 1
            new_pos = campaign_levels[selected_level].pos_on_map
            level_selector.setPosition(new_pos[0], new_pos[1])
        }
        
    }
    
}

function select_previuous_level() {
    let new_pos: number[];
    
    if (selected_level > 0) {
        selected_level -= 1
        new_pos = campaign_levels[selected_level].pos_on_map
        level_selector.setPosition(new_pos[0], new_pos[1])
    }
    
}

function play_cutscene_1() {
    scene.setBackgroundImage(assets.image`
            cutscene_bg_1
        `)
}

//  Create assets sprites (no need for global vars)
//  Play animations
//  Enemies
function spawn_enemy(enemy: Enemy) {
    let enemy_sprite: Sprite;
    if (enemy.enemy_type == 1) {
        enemy_sprite = sprites.create(assets.image`
            enemy_1_sprite
        `, SpriteKind.Enemy)
    } else if (enemy.enemy_type == 2) {
        enemy_sprite = sprites.create(assets.image`
            enemy_2_sprite
        `, SpriteKind.Enemy)
    }
    
    enemy_sprite.setPosition(enemy.pos_x, enemy.pos_y)
    enemy.create_sprite(enemy_sprite)
}

function launch_enemy_attack(enemy: Enemy) {
    
    let player_x = player_sprite.x
    enemy.start_moving(player_x)
}

// Characters
function create_player() {
    
    
    if (selected_character == 0) {
        create_knight_sprite()
        player_sprite = knight_sprite
        player = knight_stats
    } else if (selected_character == 1) {
        create_mage_sprite()
        player_sprite = mage_sprite
        player = mage_stats
    } else if (selected_character) {
        create_assassin_sprite()
        player_sprite = assassin_sprite
        player = assassin_stats
    }
    
    character_name = characters[selected_character]
    player_sprite.z = 5
    player_facing_right = true
}

function create_knight_sprite() {
    
    knight_sprite = sprites.create(assets.image`
        knight_sprite
    `, SpriteKind.Player)
}

function create_assassin_sprite() {
    
    assassin_sprite = sprites.create(img`
    `, SpriteKind.Player)
}

function create_mage_sprite() {
    
    mage_sprite = sprites.create(assets.image`
        mage_sprite
    `, SpriteKind.Player)
}

function change_selected_character() {
    
    selected_character = (selected_character + 1) % 3
}

// screate_player()
//  main
//  Sprites
let player_sprite : Sprite = null
let mage_sprite : Sprite = null
let assassin_sprite : Sprite = null
let knight_sprite : Sprite = null
let exit_sprite : Sprite = null
let letter_b_settings_icon : TextSprite = null
let letter_b_exit_icon : TextSprite = null
let settings_sprite : Sprite = null
let title_sprite : TextSprite = null
let text_sprite : TextSprite = null
let cursor : Sprite = null
let mode_b : Sprite = null
let mode_a : Sprite = null
let dev_mode_switch_sprite : Sprite = null
// # Player stats menu assets
let right_arrow : Sprite = null
let left_arrow : Sprite = null
let continue_button : Sprite = null
let right_arrow_selected = false
let left_arrow_selected = false
let continue_button_selected = true
//  Level variables
let campaign_levels = [new Level(1, [[1, 500], [3, 750], [2, 600], [4, 500], [1, 500], [1, 500], [3, 750], [2, 600], [4, 500], [1, 500], [1, 500], [3, 750], [2, 600], [4, 500], [1, 500]], false, true, 0, "game_logo_bg", "", [20, 105], ""), new Level(1, [[1, 100], [1, 50], [1, 0], [1, 0], [1, 100]], false, false, 0, "game_logo_bg", "", [59, 95], ""), new Level(1, [[1, 100], [1, 50], [1, 0], [1, 0], [1, 100]], false, false, 0, "game_logo_bg", "", [96, 75], ""), new Level(1, [[1, 100], [1, 50], [1, 0], [1, 0], [1, 100]], false, false, 0, "game_logo_bg", "", [96, 45], ""), new Level(1, [[1, 100], [1, 50], [1, 0], [1, 0], [1, 100]], false, false, 0, "game_logo_bg", "", [46, 45], ""), new Level(1, [[1, 100], [1, 50], [1, 0], [1, 0], [1, 100]], false, false, 0, "game_logo_bg", "", [46, 15], "")]
//  Level 1
//  Level 2
//  Level 3
//  Level 4
//  Level 5
//  Level 6
let level_selector : Sprite = null
let selected_level = 0
let playing_level = false
let player_facing_right = true
//  Booleans
let on_main_screen = true
let on_choose_mode = false
let on_settings_menu = false
on_settings_menu = false
on_choose_mode = false
let choose_campaign_mode = true
let choose_tower_mode = false
let on_level_map_screen = false
let on_level_screen = false
let player_stats_menu_opened = false
let on_dev_mode = false
//  Characters
let characters = ["Knight", "Mage", "Assassin"]
let character_name = ""
let selected_character = 1
let knight_stats = set_knight_base_stats()
let mage_stats = set_mage_base_stats()
let assassin_stats = set_assassin_base_stats()
//  Enemies
//  Notes: 
//  player_y = 100
//  conventional x to put enemy on right = 150
//  conventional x to put enemy on left = 0 ???
let enemies_collection = [new Enemy(1, 100, 10, 20, 150, 100), new Enemy(1, 100, 10, 20, 20, 100), new Enemy(2, 100, 10, 20, 150, 100), new Enemy(2, 100, 10, 20, 20, 100)]
//  ghost coming from right
//  ghost coming from left
//  bat coming from right
//  bat coming from left
//  Player
let player = set_knight_base_stats()
//  On start
open_main_screen()
