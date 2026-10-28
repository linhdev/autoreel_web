/**
 * A second layer for the two subtitle pages: when a caption file is the right
 * download, and what translating it does and does not involve. Merged after
 * `subtitleSections.js` by `build-download-use-cases.mjs`.
 */
export const SUBTITLE_EXTRA = {
  'youtube-subtitle': {
    vi: {
      sections: [
        {
          h2: 'Khi nào chỉ cần phụ đề, không cần video',
          paragraphs: [
            'Nếu mục tiêu là dịch, tìm kiếm trong lời nói hoặc làm phụ đề cho video của bạn, file phụ đề nhẹ hơn video rất nhiều và không cần tải hình. Một file SRT vài KB thay vì MP4 vài chục MB.',
            'Nhưng phụ đề không chứa hình, âm thanh hay ngữ cảnh. Nếu bạn cần cắt cảnh hoặc làm recap, hãy tải video ở trang tải video YouTube; phụ đề chỉ là bản ghi lời, không thay thế footage.',
          ],
          bullets: [
            'Dịch hoặc tìm kiếm lời nói.',
            'Làm phụ đề cho video của bạn.',
            'Không có hình hoặc âm thanh.',
            'Không thay thế video gốc.',
          ],
        },
      ],
      faq: [
        ['Có tách được âm thanh từ file phụ đề không?', 'Không. Phụ đề chỉ có chữ và thời gian; muốn âm thanh, hãy dùng trang tải video hoặc trang tải âm thanh.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'When the captions are the only download you need',
          paragraphs: [
            'If the goal is translation, searching the spoken words or captioning your own video, a caption file is far lighter than the video and needs no picture. An SRT is a few KB instead of a video that is tens of MB.',
            'But captions carry no picture, sound or context. If you need to cut scenes or build a recap, download the video from the YouTube page; captions are a transcript, not a replacement for footage.',
          ],
          bullets: [
            'Translate or search the spoken words.',
            'Caption your own video.',
            'No picture or sound.',
            'Not a replacement for the video.',
          ],
        },
      ],
      faq: [
        ['Can I extract audio from a subtitle file?', 'No. Subtitles contain text and timing only; for audio, use the video or audio downloader.'],
      ],
    },
  },

  'bilibili-subtitle': {
    vi: {
      sections: [
        {
          h2: 'Phụ đề Bilibili và bản dịch tiếng Việt',
          paragraphs: [
            'Phụ đề Bilibili thường là tiếng Trung. Nếu bạn cần bản tiếng Việt, bạn phải dịch file SRT/VTT/ASS sau khi tải; trang không dịch và không tạo bản dịch tự động.',
            'Khi dịch, hãy giữ timecode gốc và kiểm tra các câu dài bị xuống dòng. Nếu video có phụ đề cứng, bạn không có timecode để dịch; cần nghe và tạo file mới, hoặc dùng công cụ nhận dạng giọng nói.',
          ],
          bullets: [
            'Tải track công khai.',
            'Dịch ngoài trang này.',
            'Giữ timecode gốc.',
            'Phụ đề cứng phải làm lại.',
          ],
        },
      ],
      faq: [
        ['Trang có dịch tiếng Trung sang tiếng Việt không?', 'Không. Trang chỉ trả track nền tảng đang có; bản dịch là việc của bạn và cần kiểm tra quyền sử dụng.'],
      ],
    },
    en: {
      sections: [
        {
          h2: 'Bilibili subtitles and a Vietnamese translation',
          paragraphs: [
            'Bilibili subtitles are usually Chinese. If you need Vietnamese, you have to translate the SRT/VTT/ASS after downloading; the page does not translate and does not create a translation.',
            'When translating, keep the original timecodes and check long lines that were split. If the video has burned-in subtitles, there is no timecode to translate; you have to transcribe by ear or use speech recognition to build a new file.',
          ],
          bullets: [
            'Download the public track.',
            'Translate outside this page.',
            'Keep the original timecodes.',
            'Hard subtitles must be rebuilt.',
          ],
        },
      ],
      faq: [
        ['Does the page translate Chinese into Vietnamese?', 'No. It returns the track the platform has; the translation is your work and you must check the usage rights.'],
      ],
    },
  },
};
