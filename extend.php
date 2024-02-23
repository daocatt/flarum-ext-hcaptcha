<?php
namespace Gtdxyz\HCaptcha;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Discussion\Event\Saving as DiscussionSaving;
use Flarum\Extend;
use Flarum\Post\Event\Saving as PostSaving;
use Flarum\User\Event\Saving as UserSaving;
use Gtdxyz\HCaptcha\Listeners\AddValidatorRule;
use Gtdxyz\HCaptcha\Validators\HCaptchaValidator;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less')
        ->content(Content\ExtensionSettings::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Settings())
        ->serializeToForum('hCaptchaDarkMode', 'hcaptcha-theme_dark_mode', 'boolVal'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('postWithoutHCaptcha', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission('gtdxyz-hcaptcha.postWithoutHCaptcha');
        }),

    (new Extend\Validator(HCaptchaValidator::class))
        ->configure(AddValidatorRule::class),

    (new Extend\Event())
        ->listen(UserSaving::class, Listeners\RegisterValidate::class)
        ->listen(DiscussionSaving::class, Listeners\StartDiscussionValidate::class)
        ->listen(PostSaving::class, Listeners\ReplyPostValidate::class),
];
