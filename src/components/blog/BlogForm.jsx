import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import { useApiAxios } from 'api/base';
import LoadingIndicator from 'components/LoadingIndicator';
import useFieldValues from 'hooks/useFieldValues';
import DebugStates from 'components/DebugStates';

const INIT_FIELD_VALUES = { title: '', content: '' };

function BlogForm({ postId, handleDidSave }) {
  const navigate = useNavigate();
  const [{ data: post, loading: getLoading, error: getError }] = useApiAxios(
    `/blog/api/posts/${postId}/`,
    { manual: !postId },
  );

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !postId ? '/blog/api/posts/' : `/blog/api/posts/${postId}/`,
      method: !postId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } = useFieldValues(
    post || INIT_FIELD_VALUES,
  );

  const handleSubmit = (e) => {
    console.log('저장되었습니다.');
    e.preventDefault();

    saveRequest({
      data: fieldValues,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) handleDidSave(savedPost);
    });
  };

  return (
    <div>
      <h2>새 포스팅 작성폼</h2>

      {saveLoading && <LoadingIndicator>저장 중 ...</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다. (${saveError.response.status} ${saveError.response.statusText})`}

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.title?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <textarea
            name="content"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full h-80 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.content?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="flex my-3 p-1 gap-4">
          <Button onClick={() => navigate('/blog/')}>목록으로</Button>
          <Button>저장하기</Button>
        </div>
      </form>

      <DebugStates
        article={post}
        getLoading={getLoading}
        getEerror={getError}
        saveErrorMessages={saveErrorMessages}
        fieldValues={fieldValues}
      />
    </div>
  );
}

export default BlogForm;
