<script setup lang="ts"></script>
<template>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h1 class="text-5xl font-bold mt-20">アンニョン👋</h1>
      <p class="text-lg text-gray-900 mt-5 p-2 border-l-4 border-sky-600">福岡で暮らしながら開発している人間です</p>
      <p class="text-base text-gray-800 mb-3 p-2">
        一番好きな映画は
        <a href="https://umimachi.gaga.ne.jp/" target="”_blank”" class="text-sky-600">海街ダイアリ</a
        >で、一番好きな女優は<a
          href="https://www.instagram.com/suzu.hirose.official/"
          target="”_blank”"
          class="text-sky-600"
          >広瀬すずさん</a
        >です。広瀬すずさんと実際に会うのが夢ですが、たとえ会えなくても、自分が開発したアプリを使ってもらえたら欲しいです。このブログでは開発に役立つ様々な話を書いていこうと思います。よろしくお願いします！
      </p>
    </div>

    <NuxtImg format="webp" src="/blue-whale.png" class="md:w-1/2 md:max-w-sm mx-auto" />
  </section>
  <section class="flex flex-col md:flex-row">
    <div>
      <h2
        class="text-xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-sky-700 text-transparent bg-clip-text inline-flex items-center"
      >
        <Icon name="heroicons:code-bracket" class="w-5 h-5 mr-2 text-sky-600" />
        開発ジャーニ
      </h2>
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023.06</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="https://layered.inc/" class="hover:text-sky-600">感情日記の開発</a>
          </h3>
          <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            プログラミングスクールで初めてコーディングを学び、その知識を活かして5人でチームを組み、「感情日記」というサービスを開発しました。
            ユーザーが書いた日記から感情を分析し、0〜5点でスコア化、感情の変化はグラフで可視化されます。
            友達機能を使ってお互いの日記を見たり、コメントや「いいね」を付けたりできるほか、チャット機能もあり、ユーザー同士が交流できるようにしました。
            さらに、日記から頻繁に出るキーワードを抽出し、関連するInstagramの投稿も一緒に表示する機能も追加しました。
            このプロジェクトで、スクール内で1位を獲得しました。
          </p>
          <div class="flex flex-wrap gap-3 mb-4">
            <span
              class="inline-flex items-center bg-blue-700 rounded-full pl-0 pr-3 py-1 text-sm font-medium text-white"
            >
              <span class="flex items-center justify-center bg-white p-1 rounded-full mx-2">
                <Icon name="logos:jquery" class="w-4 h-4" />
              </span>
              jQuery
            </span>
            <span
              class="inline-flex items-center bg-red-700 rounded-full pl-0 pr-3 py-1 text-sm font-medium text-white"
            >
              <span class="flex items-center justify-center bg-white p-1 rounded-full mx-2">
                <Icon name="logos:java" class="w-4 h-4" />
              </span>
              Java
            </span>
            <span
              class="inline-flex items-center bg-red-600 rounded-full pl-0 pr-3 py-1 text-sm font-medium text-white"
            >
              <span class="flex items-center justify-center bg-white p-1 rounded-full mx-2">
                <Icon name="logos:oracle" class="w-4 h-4" />
              </span>
              Oracle
            </span>
          </div>
        </li>
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023.12.01</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="https://layered.inc/" class="hover:text-sky-600">株式会社レイヤード</a>入社
          </h3>
          <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            株式会社レイヤードは医療機関向けの オンライン問診、予約システム、患者管理システム
            などを開発している会社です。入社後は、患者管理システムの保守運用や機能改善の開発を担当しています。
          </p>
          <div class="flex flex-wrap gap-3 mb-4">
            <span
              class="inline-flex items-center bg-green-600 rounded-full pl-0 pr-3 py-1 text-sm font-medium text-white"
            >
              <span class="flex items-center justify-center bg-white p-1 rounded-full mx-2">
                <Icon name="logos:vue" class="w-4 h-4" />
              </span>
              Vue
            </span>
            <span
              class="inline-flex items-center bg-red-600 rounded-full pl-0 pr-3 py-1 text-sm font-medium text-white"
            >
              <span class="flex items-center justify-center bg-white p-1 rounded-full mx-2">
                <Icon name="logos:rails" class="w-4 h-4" />
              </span>
              Ruby on Rails
            </span>
            <span
              class="inline-flex items-center bg-blue-600 rounded-full pl-0 pr-3 py-1 text-sm font-medium text-white"
            >
              <span class="flex items-center justify-center bg-white p-1 rounded-full mx-2">
                <Icon name="logos:mysql" class="w-4 h-4" />
              </span>
              MySQL
            </span>
            <span
              class="inline-flex items-center bg-gray-800 rounded-full pl-0 pr-3 py-1 text-sm font-medium text-white"
            >
              <span class="flex items-center justify-center bg-white p-1 rounded-full mx-2">
                <Icon name="logos:github-icon" class="w-4 h-4" />
              </span>
              GitHub
            </span>
            <span
              class="inline-flex items-center bg-yellow-600 rounded-full pl-0 pr-3 py-1 text-sm font-medium text-white"
            >
              <span class="flex items-center justify-center bg-white p-1 rounded-full mx-2">
                <Icon name="logos:aws" class="w-4 h-4" />
              </span>
              AWS
            </span>
          </div>
        </li>
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024.03</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">社内向け短縮URL・計測機能を開発</h3>
          <p class="text-sm mb-4 font-normal text-gray-500 dark:text-gray-400">
            医療機関に送るメッセージに含まれるリンクが長すぎて、見づらくクリック率の確認も難しかったため、より見やすく、実際にどのくらいクリックされたかを把握できるように、短縮URLと計測機能を導入しました。
          </p>
          <div class="flex flex-wrap gap-3 mb-4">
            <span
              class="inline-flex items-center bg-green-600 rounded-full pl-0 pr-3 py-1 text-sm font-medium text-white"
            >
              <span class="flex items-center justify-center bg-white p-1 rounded-full mx-2">
                <Icon name="logos:vue" class="w-4 h-4" />
              </span>
              Vue
            </span>
            <span
              class="inline-flex items-center bg-yellow-600 rounded-full pl-0 pr-3 py-1 text-sm font-medium text-white"
            >
              <span class="flex items-center justify-center bg-white p-1 rounded-full mx-2">
                <Icon name="logos:aws" class="w-4 h-4" />
              </span>
              AWS
            </span>
          </div>
        </li>
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2025.04</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="https://note.com/layered_recruit/n/n01262041bc08" class="hover:text-sky-600" target="_blank"
              >レイヤードミートアップ </a
            >登壇
          </h3>
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
            「チャレンジを重ねる」というテーマのもと、自分が関わっている患者管理システムPRMについての説明と、今後取り組みたいことについて発表しました
          </p>
        </li>
        <!-- <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2025.08</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">韓国語学校ウリサイト開発</h3>
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400"></p>
        </li>
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2025.05</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">SAA取得</h3>
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400"></p>
        </li> -->
      </ol>
    </div>
  </section>

  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Post</h2>
  </section>
</template>
